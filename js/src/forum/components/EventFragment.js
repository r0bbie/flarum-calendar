import Component from 'flarum/common/Component';
import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';
import username from 'flarum/common/helpers/username';
import userOnline from 'flarum/common/helpers/userOnline';
import EditEventModal from './EditEventModal';
import app from 'flarum/forum/app';

export default class EventFragment extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  title() {
    return this.attrs.event.name();
  }

  className() {
    return 'EventTeaser Modal--small';
  }

  view() {
    return (
      <div>
        <p id="eventdate">
          {(() => {

            return (
              <>
                {(() => {
                  const startDate = new Date(this.attrs.event.event_start());
                  const endDate = new Date(this.attrs.event.event_end());
                  const sameDay = startDate.toDateString() === endDate.toDateString();

                  return sameDay
                    ? startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                    : `${startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} to ${endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
                })()}
              </>
            );

          })()}
        </p>
        <p id="eventdescription"/>
        {/*{!app.forum.attribute('webbinaro-calendar.hide_host') && (
          <p>
            {app.translator.trans('flarum-calendar.forum.event.hosted_by')}{' '}
            <Link href={app.route.user(this.attrs.event.user())}>
              {userOnline(this.attrs.event.user())}
              {username(this.attrs.event.user())}
            </Link>
          </p>
        )}*/}
        <p>
          {(() => {
            const startDate = new Date(this.attrs.event.event_start());
            const endDate = new Date(this.attrs.event.event_end());
            const sameDay = startDate.toDateString() === endDate.toDateString();
            const sameTime = startDate.getTime() === endDate.getTime();

            if (!sameTime && sameDay) {
              return (
                <>
                  {app.translator.trans('flarum-calendar.forum.event.starts')} {new Date(this.attrs.event.event_start()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  <br/>
                  {app.translator.trans('flarum-calendar.forum.event.ends')} {new Date(this.attrs.event.event_end()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </>
              );
            }

          })()}
        </p>
        {app.session.user && (app.session.user.canModerateEvents() || this.attrs.event.user().id() === app.session.user.id()) && (
          <div>
            <Button icon="fas fa-edit" onclick={this.editLaunch.bind(this)}
                    className="Button Button--icon Button--link"/>
            <Button icon="fas fa-trash-alt" onclick={this.deleteEvent.bind(this)}
                    className="Button Button--icon Button--link"/>
          </div>
        )}
      </div>
    );
  }

  oncreate(vnode) {
    const descElement = document.getElementById('eventdescription');
    s9e.TextFormatter.preview(this.attrs.event.description(), descElement);
  }

  editLaunch() {
    app.modal.show(EditEventModal, {
      event: this.attrs.event,
      refresh: app.calendarState.refresh.bind(app.calendarState)
    });
  }

  deleteEvent() {
    if (!confirm(app.translator.trans('flarum-calendar.forum.event.confirm_delete'))) {
      return;
    }
    this.attrs.event.delete().then(() => {
      app.alerts.show(Alert, {type: 'success'}, app.translator.trans('flarum-calendar.forum.event.deleted'));
      m.route.set(app.route('advevents'));
      if (this.attrs.modal) {
        this.attrs.modal.hide();
      }
    });
  }
}
