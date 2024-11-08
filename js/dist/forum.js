/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/CalendarPage.js":
/*!**********************************************!*\
  !*** ./src/forum/components/CalendarPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dynamicallyLoadLib */ "./src/forum/utils/dynamicallyLoadLib.js");
/* harmony import */ var _EventTeaser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventTeaser */ "./src/forum/components/EventTeaser.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _EditEventModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditEventModal */ "./src/forum/components/EditEventModal.js");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _states_CalendarState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../states/CalendarState */ "./src/forum/states/CalendarState.js");



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }











var CalendarPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CalendarPage, _Page);
  function CalendarPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = CalendarPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().history.push('advevents');
    this.bodyClass = 'App--calendar';
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('flarum-calendar.forum.button.landing'));
  };
  _proto.view = function view() {
    return m("div", {
      className: "IndexPage CalendarPage"
    }, flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_7___default().prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("div", {
      className: "IndexPage-toolbar"
    }), m("div", {
      id: "calendar"
    })))));
  }

  /**
   * Build an item list for the sidebar of the index page. By default this is a
   * "New Discussion" button, and then a DropdownSelect component containing a
   * list of navigation items.
   *
   * @return {ItemList}
   */;
  _proto.sidebarItems = function sidebarItems() {
    var items = flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_7___default().prototype.sidebarItems();
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user)) {
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user.canStartEvents()) {
        items.setContent('newDiscussion', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_10___default()), {
          icon: "fas fa-calendar-plus",
          className: "Button Button--primary PollModal-SubmitButton",
          itemClassName: "App-primaryControl",
          onclick: this.openCreateModal.bind(this)
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('flarum-calendar.forum.button.create')));
      } else {
        items.remove('newDiscussion');
      }
    } else {
      items.setContent('newDiscussion', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_10___default()), {
        icon: "fas fa-calendar-plus",
        className: "Button Button--primary PollModal-SubmitButton",
        itemClassName: "App-primaryControl",
        onclick: this.openCreateModal.bind(this)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('flarum-calendar.forum.button.login')));
    }
    return items;
  };
  _proto.oncreate = function oncreate(vnode) {
    this.renderCalendar(vnode);
  };
  _proto.onupdate = function onupdate(vnode) {
    this.state.refresh(false);
  };
  _proto.renderCalendar = /*#__PURE__*/function () {
    var _renderCalendar = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(vnode) {
      var _this = this;
      var calendarEl, openModal, calendar;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_8__["default"])('fullcalendarCore');
          case 2:
            _context2.next = 4;
            return (0,_utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_8__["default"])(['fullcalendarLocales', 'fullcalendarDayGrid', 'fullcalendarInteraction', 'fullcalendarList']);
          case 4:
            calendarEl = document.getElementById('calendar');
            openModal = this.openCreateModal.bind(this); // console.debug(`Loading Full Calendar with locale: ${app.translator.getLocale()}`);
            calendar = new FullCalendar.Calendar(calendarEl, {
              locale: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.getLocale(),
              // the initial locale
              headerToolbar: {
                center: 'dayGridMonth,listYearFromToday'
              },
              // buttons for switching between views
              initialView: 'listYearFromToday',
              views: {
                listYearFromToday: {
                  type: 'list',
                  visibleRange: function visibleRange(currentDate) {
                    // Generate a new date for manipulating in the next step
                    var startDate = new Date(currentDate.valueOf());
                    var endDate = new Date(currentDate.valueOf());

                    // Adjust the end date to one year into the future
                    endDate.setFullYear(endDate.getFullYear() + 1);
                    return {
                      start: startDate,
                      end: endDate
                    };
                  },
                  listDaySideFormat: {
                    weekday: 'long'
                  },
                  // day-of-week is nice-to-have
                  eventTimeFormat: {
                    hour: undefined,
                    minute: undefined
                  },
                  displayEventTime: false,
                  displayEventEnd: false
                },
                dayGridMonth: {
                  eventTimeFormat: {
                    hour: undefined,
                    minute: undefined
                  },
                  displayEventTime: false,
                  displayEventEnd: false
                }
              },
              eventClick: /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(info) {
                  var _iterator, _step, _this$state, event;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        info.jsEvent.preventDefault();
                        _context.t0 = _createForOfIteratorHelperLoose;
                        _context.next = 4;
                        return (_this$state = this.state) == null ? void 0 : _this$state.getEvents();
                      case 4:
                        _context.t1 = _context.sent;
                        if (_context.t1) {
                          _context.next = 7;
                          break;
                        }
                        _context.t1 = [];
                      case 7:
                        _context.t2 = _context.t1;
                        _iterator = (0, _context.t0)(_context.t2);
                      case 9:
                        if ((_step = _iterator()).done) {
                          _context.next = 16;
                          break;
                        }
                        event = _step.value;
                        if (!(event.id() === info.event.extendedProps.eventId)) {
                          _context.next = 14;
                          break;
                        }
                        flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().modal.show(_EventTeaser__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          event: event
                        });
                        return _context.abrupt("break", 16);
                      case 14:
                        _context.next = 9;
                        break;
                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }().bind(this),
              dateClick: function dateClick(info) {
                openModal(info);
              },
              events: function events(info, successCb, failureCb) {
                var _this$state2;
                return ((_this$state2 = _this.state) == null ? void 0 : _this$state2.getEvents(info, successCb, failureCb)) || [];
              },
              eventDataTransform: this.flarumToFullCalendarEvent
            });
            calendar.render();
            this.state = new _states_CalendarState__WEBPACK_IMPORTED_MODULE_13__["default"](calendar, this);
            (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().calendarState) = this.state;
            this.state.refresh();
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function renderCalendar(_x) {
      return _renderCalendar.apply(this, arguments);
    }
    return renderCalendar;
  }();
  _proto.openCreateModal = function openCreateModal(info) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user.canStartEvents()) {
      return;
    }
    var refresh = this.state.refresh.bind(this.state);
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session.user) != undefined) {
      if (info.dateStr) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().modal.show(_EditEventModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          withStart: info.dateStr,
          refresh: refresh
        });
      } else {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().modal.show(_EditEventModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          refresh: refresh
        });
      }
    } else {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().modal.show((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_12___default()));
    }
  };
  _proto.flarumToFullCalendarEvent = function flarumToFullCalendarEvent(eventData) {
    return {
      title: eventData.name(),
      end: eventData.event_end(),
      start: eventData.event_start(),
      extendedProps: {
        description: eventData.description(),
        user: eventData.user(),
        eventId: eventData.id()
      },
      // for link awareness each event includes link evem though we use event  modal
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().route('advevent', {
        id: eventData.id()
      })
    };
  };
  return CalendarPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/EditEventModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/EditEventModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditEventModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dynamicallyLoadLib */ "./src/forum/utils/dynamicallyLoadLib.js");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _states_CustomComposerState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../states/CustomComposerState */ "./src/forum/states/CustomComposerState.js");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_10__);












/**
 * This builds event details based on a FullCalendar concept of object.  CalendarPage talks to api, sends us FC payload
 */
var EditEventModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditEventModal, _Modal);
  function EditEventModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = EditEventModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.name = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()('');
    this.user = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()('');
    this.description = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()('');
    this.event_start = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()();
    this.event_end = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()();
    if (this.attrs.event) {
      var event = this.attrs.event;
      this.name(event.name());
      this.description(event.description());
      this.user(event.user());
      this.event_start(event.event_start());
      this.event_end(event.event_end() ? event.event_end() : event.event_start());
    }
    this.composerState = new _states_CustomComposerState__WEBPACK_IMPORTED_MODULE_8__["default"]();
  };
  _proto.title = function title() {
    return this.name() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.title_edit') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.title_create');
  };
  _proto.className = function className() {
    return 'EditEventsModal Modal--large';
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.title_label')), m("input", {
      type: "text",
      name: "title",
      className: "FormControl",
      bidi: this.name
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.dates_label')), m("div", {
      className: "PollModal--date"
    }, m("input", {
      style: "opacity: 1; color: inherit",
      className: "FormControl",
      "data-input": true,
      oncreate: this.initDatePicker.bind(this)
    }))), m("div", {
      "class": "Form-group"
    }, m("label", {
      className: "label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.description_label')), m("div", {
      className: "Composer"
    }, m((flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_9___default()), {
      disabled: this.loading,
      value: this.description(),
      onchange: this.description,
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.description_placeholder'),
      composer: this.composerState
    }))), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "submit",
      className: "Button Button--primary PollModal-SubmitButton",
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.submit'))))];
  };
  _proto.initDatePicker = /*#__PURE__*/function () {
    var _initDatePicker = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(vnode) {
      var _this = this;
      var userLang, locale;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            userLang = flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.getLocale();
            _context.next = 3;
            return (0,_utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_6__["default"])('flatpickr');
          case 3:
            _context.next = 5;
            return (0,_utils_dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_6__["default"])('flatpickrLocale', userLang);
          case 5:
            locale = flatpickr.l10ns[userLang];
            flatpickr(vnode.dom, {
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
              mode: 'range',
              locale: locale,
              defaultDate: [flatpickr.parseDate(this.event_start(), 'Y-m-d h:i K'), flatpickr.parseDate(this.event_end(), 'Y-m-d h:i K')],
              inline: true,
              onChange: function onChange(dates) {
                _this.event_start(dates[0]);
                _this.event_end(dates[1]);
              }
            });
            m.redraw();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function initDatePicker(_x) {
      return _initDatePicker.apply(this, arguments);
    }
    return initDatePicker;
  }();
  _proto.onsubmit = /*#__PURE__*/function () {
    var _onsubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            if (!(!this.name() || !this.description())) {
              _context2.next = 4;
              break;
            }
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
              type: 'error'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().translator.trans('flarum-calendar.forum.modal.requirement_message'));
            return _context2.abrupt("return");
          case 4:
            if (!this.attrs.event) {
              this.attrs.event = flarum_forum_app__WEBPACK_IMPORTED_MODULE_10___default().store.createRecord('events');
            }
            _context2.next = 7;
            return this.attrs.event.save({
              name: this.name(),
              description: this.description(),
              event_start: this.event_start(),
              event_end: this.event_end()
            });
          case 7:
            this.attrs.refresh();
            this.hide();
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function onsubmit(_x2) {
      return _onsubmit.apply(this, arguments);
    }
    return onsubmit;
  }();
  return EditEventModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/EventFragment.js":
/*!***********************************************!*\
  !*** ./src/forum/components/EventFragment.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventFragment)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/userOnline */ "flarum/common/helpers/userOnline");
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EditEventModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditEventModal */ "./src/forum/components/EditEventModal.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__);









var EventFragment = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EventFragment, _Component);
  function EventFragment() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = EventFragment.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.title = function title() {
    return this.attrs.event.name();
  };
  _proto.className = function className() {
    return 'EventTeaser Modal--small';
  };
  _proto.view = function view() {
    var _this = this;
    return m("div", null, m("p", {
      id: "eventdate"
    }, function () {
      return m('[', null, function () {
        var startDate = new Date(_this.attrs.event.event_start());
        var endDate = new Date(_this.attrs.event.event_end());
        var sameDay = startDate.toDateString() === endDate.toDateString();
        return sameDay ? startDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : startDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) + " to " + endDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }());
    }()), m("p", {
      id: "eventdescription"
    }), m("p", null, function () {
      var startDate = new Date(_this.attrs.event.event_start());
      var endDate = new Date(_this.attrs.event.event_end());
      var sameDay = startDate.toDateString() === endDate.toDateString();
      var sameTime = startDate.getTime() === endDate.getTime();
      if (!sameTime && sameDay) {
        return m('[', null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('flarum-calendar.forum.event.starts'), " ", new Date(_this.attrs.event.event_start()).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }), m("br", null), flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('flarum-calendar.forum.event.ends'), " ", new Date(_this.attrs.event.event_end()).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }));
      }
    }()), (flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().session.user) && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().session.user.canModerateEvents() || this.attrs.event.user().id() === flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().session.user.id()) && m("div", null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      icon: "fas fa-edit",
      onclick: this.editLaunch.bind(this),
      className: "Button Button--icon Button--link"
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      icon: "fas fa-trash-alt",
      onclick: this.deleteEvent.bind(this),
      className: "Button Button--icon Button--link"
    })));
  };
  _proto.oncreate = function oncreate(vnode) {
    var descElement = document.getElementById('eventdescription');
    s9e.TextFormatter.preview(this.attrs.event.description(), descElement);
  };
  _proto.editLaunch = function editLaunch() {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().modal.show(_EditEventModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      event: this.attrs.event,
      refresh: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().calendarState.refresh.bind((flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().calendarState))
    });
  };
  _proto.deleteEvent = function deleteEvent() {
    var _this2 = this;
    if (!confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('flarum-calendar.forum.event.confirm_delete'))) {
      return;
    }
    this.attrs.event["delete"]().then(function () {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: 'success'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('flarum-calendar.forum.event.deleted'));
      m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().route('advevents'));
      if (_this2.attrs.modal) {
        _this2.attrs.modal.hide();
      }
    });
  };
  return EventFragment;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/EventPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/EventPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_AffixedSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/AffixedSidebar */ "flarum/forum/components/AffixedSidebar");
/* harmony import */ var flarum_forum_components_AffixedSidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_AffixedSidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EventFragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventFragment */ "./src/forum/components/EventFragment.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CalendarPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CalendarPage */ "./src/forum/components/CalendarPage.js");









/**
 * The `EventPage` component shows a individual event details
 *
 * @abstract
 */
var EventPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EventPage, _Page);
  function EventPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = EventPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    this.event = null;
    var event = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().preloadedApiDocument();
    if (event) {
      this.show(event);
    } else {
      var eventId = m.route.param('id');
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().store.find('events', eventId).then(this.show.bind(this));
    }
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().history.push('advevent');
    this.bodyClass = 'App--event';
  };
  _proto.show = function show(event) {
    this.event = event;
    this.user = event.user();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().setTitle(event.name());
    m.redraw();
  };
  _proto.view = function view() {
    return m("div", {
      className: "EventPage"
    }, this.event ? m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m((flarum_forum_components_AffixedSidebar__WEBPACK_IMPORTED_MODULE_2___default()), null, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(_CalendarPage__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.sidebarItems().toArray())))), m("div", {
      className: "sideNavOffset IndexPage-results"
    }, m("h2", null, this.event.name()), m(_EventFragment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      event: this.event
    })))) : m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "LoadingIndicator--block"
    }));
  };
  return EventPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/EventTeaser.js":
/*!*********************************************!*\
  !*** ./src/forum/components/EventTeaser.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventTeaser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EventFragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventFragment */ "./src/forum/components/EventFragment.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7__);









/**
 * This is intended as a "teaser" to link to full event page
 */
var EventTeaser = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTeaser, _Modal);
  function EventTeaser() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = EventTeaser.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
  };
  _proto.title = function title() {
    return this.attrs.event.name();
  }

  /*
   * Override parent modal so we can have avatar in title bar
   */;
  _proto.view = function view() {
    if (this.alertAttrs) {
      this.alertAttrs.dismissible = false;
    }
    return [m("div", {
      className: 'Modal modal-dialog ' + this.className()
    }, m("div", {
      className: "Modal-content"
    }, this.constructor.isDismissible ? m("div", {
      className: "Modal-close App-backControl"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-times",
      onclick: this.hide.bind(this),
      className: "Button Button--icon Button--link"
    })) : '', m("form", {
      onsubmit: this.onsubmit.bind(this)
    }, m("div", {
      className: "Modal-header"
    }, m("div", null, m("h3", {
      className: "fa-pull-left App-titleControl App-titleControl--text",
      style: "margin-right:1em"
    }, this.title())), m("div", {
      style: "clear:both"
    })), this.alertAttrs && m("div", {
      className: "Modal-alert"
    }, m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_7___default()), this.alertAttrs)), m("div", {
      className: "Modal-body"
    }, m(_EventFragment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      event: this.attrs.event,
      modal: this
    }), m("p", null, m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().route.advevent(this.attrs.event)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans('flarum-calendar.forum.event.details')))))))];
  };
  return EventTeaser;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/EventUser.js":
/*!*******************************************!*\
  !*** ./src/forum/components/EventUser.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/userOnline */ "flarum/common/helpers/userOnline");
/* harmony import */ var flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__);










/**
 * The `PostUser` component shows the avatar and username of a post's author.
 *
 * ### Props
 *
 * - `post`
 */
var EventUser = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EventUser, _Component);
  function EventUser() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = EventUser.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    /**
     * Whether or not the user hover card is visible.
     *
     * @type {Boolean}
     */
    this.cardVisible = false;
  };
  _proto.view = function view() {
    var post = this.attrs.post;
    var user = this.attrs.user;
    if (!user) {
      return m("div", {
        className: "PostUser"
      }, m("h3", null, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user, {
        className: 'PostUser-avatar'
      }), " ", flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(user)));
    }
    var card = null;
    if (!post.isHidden() && this.cardVisible) {
      card = m((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default()), {
        user: user,
        className: "UserCard--popover",
        controlsButtonClassName: "Button Button--icon Button--flat"
      });
    }
    return m("div", {
      className: "PostUser"
    }, m("h3", null, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().route.user(user)
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user, {
      className: 'PostUser-avatar'
    }), flarum_common_helpers_userOnline__WEBPACK_IMPORTED_MODULE_6___default()(user), flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(user))), m("ul", {
      className: "PostUser-badges badges"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default()(user.badges().toArray())), card);
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    var timeout;
    this.$().on('mouseover', 'h3 a, .UserCard', function () {
      clearTimeout(timeout);
      timeout = setTimeout(_this.showCard.bind(_this), 500);
    }).on('mouseout', 'h3 a, .UserCard', function () {
      clearTimeout(timeout);
      timeout = setTimeout(_this.hideCard.bind(_this), 250);
    });
  }

  /**
   * Show the user card.
   */;
  _proto.showCard = function showCard() {
    var _this2 = this;
    this.cardVisible = true;
    m.redraw();
    setTimeout(function () {
      return _this2.$('.UserCard').addClass('in');
    });
  }

  /**
   * Hide the user card.
   */;
  _proto.hideCard = function hideCard() {
    var _this3 = this;
    this.$('.UserCard').removeClass('in').one('transitionend webkitTransitionEnd oTransitionEnd', function () {
      _this3.cardVisible = false;
      m.redraw();
    });
  };
  return EventUser;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/index.js":
/*!***************************************!*\
  !*** ./src/forum/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _CalendarPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarPage */ "./src/forum/components/CalendarPage.js");
/* harmony import */ var _EditEventModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditEventModal */ "./src/forum/components/EditEventModal.js");
/* harmony import */ var _EventFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventFragment */ "./src/forum/components/EventFragment.js");
/* harmony import */ var _EventPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventPage */ "./src/forum/components/EventPage.js");
/* harmony import */ var _EventTeaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventTeaser */ "./src/forum/components/EventTeaser.js");
/* harmony import */ var _EventUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventUser */ "./src/forum/components/EventUser.js");






var components = {
  CalendarPage: _CalendarPage__WEBPACK_IMPORTED_MODULE_0__["default"],
  EditEventModal: _EditEventModal__WEBPACK_IMPORTED_MODULE_1__["default"],
  EventFragment: _EventFragment__WEBPACK_IMPORTED_MODULE_2__["default"],
  EventPage: _EventPage__WEBPACK_IMPORTED_MODULE_3__["default"],
  EventTeaser: _EventTeaser__WEBPACK_IMPORTED_MODULE_4__["default"],
  EventUser: _EventUser__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_8__.components),
/* harmony export */   "models": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_9__.models),
/* harmony export */   "states": () => (/* reexport safe */ _states__WEBPACK_IMPORTED_MODULE_10__.states),
/* harmony export */   "utils": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_11__.utils)
/* harmony export */ });
/* harmony import */ var _components_CalendarPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CalendarPage.js */ "./src/forum/components/CalendarPage.js");
/* harmony import */ var _components_EventPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EventPage.js */ "./src/forum/components/EventPage.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_Event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Event.js */ "./src/forum/models/Event.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/app.js */ "flarum/forum/app.js");
/* harmony import */ var flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/forum/components/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models */ "./src/forum/models/index.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./states */ "./src/forum/states/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/forum/utils/index.js");








flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().initializers.add('webbinaro-calendar', function () {
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().routes.advevents) = {
    path: '/events',
    component: _components_CalendarPage_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().routes.advevent) = {
    path: '/events/:id',
    component: _components_EventPage_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  };

  // Allows easy route generation by passing an event from components (see EventFragment)
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().route.advevent) = function (event) {
    return flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().route('advevent', {
      id: event.id()
    });
  };
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().store.models.events) = _models_Event_js__WEBPACK_IMPORTED_MODULE_5__["default"];
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().store.models.users.prototype.canModerateEvents) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_6___default().attribute('canModerateEvents');
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().store.models.users.prototype.canStartEvents) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_6___default().attribute('canStartEvents');
  (flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().store.models.users.prototype.canViewEvents) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_6___default().attribute('canViewEvents');

  // Add events to side nav
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'navItems', function (items) {
    items.add('events', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      icon: "fas fa-calendar-alt",
      href: flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().route('advevents')
    }, flarum_forum_app_js__WEBPACK_IMPORTED_MODULE_7___default().translator.trans('flarum-calendar.forum.button.landing')), 50);
    return items;
  });
});





/***/ }),

/***/ "./src/forum/models/Event.js":
/*!***********************************!*\
  !*** ./src/forum/models/Event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Event = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Event, _Model);
  function Event() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.description = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description');
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.event_start = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('event_start', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.event_end = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('event_end', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.user = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('user');
    return _this;
  }
  return Event;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/models/index.js":
/*!***********************************!*\
  !*** ./src/forum/models/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "models": () => (/* binding */ models)
/* harmony export */ });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./src/forum/models/Event.js");

var models = {
  Event: _Event__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/states/CalendarState.js":
/*!*******************************************!*\
  !*** ./src/forum/states/CalendarState.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);



var CalendarState = /*#__PURE__*/function () {
  function CalendarState(calendar, calendarPage) {
    this.calendar = calendar;
    this.events = null;
    this.info = null;
  }
  var _proto = CalendarState.prototype;
  _proto.refresh = function refresh(clear) {
    if (clear === void 0) {
      clear = true;
    }
    if (clear) {
      this.events = null;
      this.info = null;
    }
    this.calendar.refetchEvents();
  };
  _proto.getEvents = /*#__PURE__*/function () {
    var _getEvents = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(info, successCallback, failureCallbacks) {
      var _this$info, _this$info2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(info && (((_this$info = this.info) == null ? void 0 : _this$info.startStr) != info.startStr && ((_this$info2 = this.info) == null ? void 0 : _this$info2.endStr) != info.endStr || !this.events))) {
              _context.next = 5;
              break;
            }
            this.info = info;
            this.successCallback = successCallback;
            _context.next = 5;
            return this.fetchEvents(info, successCallback, failureCallbacks);
          case 5:
            return _context.abrupt("return", this.events || []);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function getEvents(_x, _x2, _x3) {
      return _getEvents.apply(this, arguments);
    }
    return getEvents;
  }();
  _proto.fetchEvents = /*#__PURE__*/function () {
    var _fetchEvents = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(info, successCallback, failureCallbacks) {
      var results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.find('events', {
              start: info.start.toISOString(),
              end: info.end.toISOString(),
              sort: 'event_start'
            });
          case 2:
            results = _context2.sent;
            this.events = results;
            successCallback(results);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function fetchEvents(_x4, _x5, _x6) {
      return _fetchEvents.apply(this, arguments);
    }
    return fetchEvents;
  }();
  return CalendarState;
}();


/***/ }),

/***/ "./src/forum/states/CustomComposerState.js":
/*!*************************************************!*\
  !*** ./src/forum/states/CustomComposerState.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomComposerState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/states/ComposerState */ "flarum/forum/states/ComposerState");
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_1__);


var CustomComposerState = /*#__PURE__*/function (_ComposerState) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomComposerState, _ComposerState);
  function CustomComposerState() {
    var _this;
    _this = _ComposerState.call(this) || this;

    /**
     * The composer's current position.
     *
     * @type {ComposerState.Position}
     */
    _this.position = (flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_1___default().Position.NORMAL);
    return _this;
  }
  return CustomComposerState;
}((flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/states/index.js":
/*!***********************************!*\
  !*** ./src/forum/states/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": () => (/* binding */ states)
/* harmony export */ });
/* harmony import */ var _CustomComposerState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomComposerState */ "./src/forum/states/CustomComposerState.js");

var states = {
  CustomComposerState: _CustomComposerState__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/utils/dynamicallyLoadLib.js":
/*!***********************************************!*\
  !*** ./src/forum/utils/dynamicallyLoadLib.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dynamicallyLoadLib)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

var libs = {
  fullcalendarCore: {
    js: 'https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.8/index.global.min.js',
    loaded: function loaded() {
      return typeof FullCalendar !== 'undefined';
    }
  },
  fullcalendarLocales: {
    js: 'https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.8/locales-all.global.min.js',
    loaded: function loaded() {
      return typeof FullCalendar !== 'undefined' && FullCalendar.globalLocales.length > 2;
    }
  },
  fullcalendarDayGrid: {
    js: 'https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.8/index.global.min.js',
    loaded: function loaded() {
      return typeof FullCalendar !== 'undefined' && FullCalendar.globalPlugins.find(function (p) {
        return p.name === '@fullcalendar/daygrid';
      });
    }
  },
  fullcalendarInteraction: {
    js: 'https://cdn.jsdelivr.net/npm/@fullcalendar/interaction@6.1.8/index.global.min.js',
    loaded: function loaded() {
      return typeof FullCalendar !== 'undefined' && FullCalendar.globalPlugins.find(function (p) {
        return p.name === '@fullcalendar/interaction';
      });
    }
  },
  fullcalendarList: {
    js: 'https://cdn.jsdelivr.net/npm/@fullcalendar/list@6.1.8/index.global.min.js',
    loaded: function loaded() {
      return typeof FullCalendar !== 'undefined' && FullCalendar.globalPlugins.find(function (p) {
        return p.name === '@fullcalendar/list';
      });
    }
  },
  flatpickr: {
    css: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
    js: 'https://cdn.jsdelivr.net/npm/flatpickr',
    loaded: function loaded() {
      return typeof window.flatpickr !== 'undefined';
    }
  },
  flatpickrLocale: {
    js: function js(locale) {
      return "https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/" + locale + ".js";
    },
    loaded: function loaded(locale) {
      return typeof window.flatpickr.l10ns[locale] !== 'undefined';
    }
  }
};
function dynamicallyLoadLib(lib) {
  var _libConf;
  for (var _len = arguments.length, moreArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    moreArgs[_key - 1] = arguments[_key];
  }
  if (Array.isArray(lib)) {
    return Promise.all(lib.map(function (l) {
      return dynamicallyLoadLib(l);
    }));
  }
  var libConf = {};

  // If the lib is an object
  if (typeof lib === 'object') {
    libConf = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lib);
    if (!libConf.loaded) {
      console.warn('dynamicallyLoadLib: No loaded function defined for lib', lib);
      return Promise.resolve();
    }
  }
  if (typeof lib === 'string') {
    // If lib is not in the libs object log a warning and return a resolved promise
    if (!libs[lib]) {
      console.warn('dynamicallyLoadLib: lib not found', lib);
      return Promise.resolve();
    }
    libConf = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, libs[lib]);
  }
  if (Object.keys(libConf).length === 0) {
    console.warn('dynamicallyLoadLib: lib is not a string nor an valid object', lib);
    return Promise.resolve();
  }
  var loadPromises = [];
  if ((_libConf = libConf).loaded.apply(_libConf, moreArgs)) {
    loadPromises.push(Promise.resolve());
  } else {
    if (libConf.css) {
      var css = Array.isArray(libConf.css) ? libConf.css : [libConf.css];
      css.forEach(function (href) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = href;
        document.head.appendChild(css);
      });
    }
    if (libConf.js) {
      if (typeof libConf.js === 'function') {
        var _libConf2;
        libConf.js = (_libConf2 = libConf).js.apply(_libConf2, moreArgs);
      }
      var js = Array.isArray(libConf.js) ? libConf.js : [libConf.js];
      js.forEach(function (src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
      });
    }
    loadPromises.push(new Promise(function (resolve, reject) {
      var interval = setInterval(function () {
        var _libConf3;
        if ((_libConf3 = libConf).loaded.apply(_libConf3, moreArgs)) {
          clearInterval(interval);
          resolve();
        }
      }, 5);
    }));
  }
  return Promise.all(loadPromises);
}

/***/ }),

/***/ "./src/forum/utils/index.js":
/*!**********************************!*\
  !*** ./src/forum/utils/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "utils": () => (/* binding */ utils)
/* harmony export */ });
/* harmony import */ var _dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicallyLoadLib */ "./src/forum/utils/dynamicallyLoadLib.js");

var utils = {
  dynamicallyLoadLib: _dynamicallyLoadLib__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/helpers/userOnline":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/userOnline']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/userOnline'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/app.js":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['forum/app.js']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app.js'];

/***/ }),

/***/ "flarum/forum/components/AffixedSidebar":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/AffixedSidebar']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/AffixedSidebar'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/states/ComposerState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/states/ComposerState']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/ComposerState'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.components),
/* harmony export */   "models": () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.models),
/* harmony export */   "states": () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.states),
/* harmony export */   "utils": () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.utils)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map