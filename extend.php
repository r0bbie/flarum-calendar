<?php

/*
 * This file is part of webbinaro/flarum-calendar.
 *
 * Copyright (c) 2020 Eddie Webbinaro.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Webbinaro\AdvCalendar;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Webbinaro\AdvCalendar\Api\Controllers as ControllersAlias;
use Webbinaro\AdvCalendar\Integrations\EventResourceRegister;
use Webbinaro\AdvCalendar\Listeners;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/events', 'advevents')
        ->route(
            '/events/{id}[/{filter:[0-9]*}]',
            'advevent',
            Content\Event::class),



    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    //API Routes
    (new Extend\Routes('api'))
    	->get('/events','events.index', ControllersAlias\EventsListController::class)
    	->get('/events/{id}','events.show', ControllersAlias\EventsShowController::class)
    	->post('/events','events.create', ControllersAlias\EventsCreateController::class)
        ->patch('/events/{id}','events.edit', ControllersAlias\EventsUpdateController::class)
        ->delete('/events/{id}','events.delete', ControllersAlias\EventsDeleteController::class),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    new EventResourceRegister(),

    (new Extend\Settings)
        ->serializeToForum('webbinaro-calendar.hide_host', 'webbinaro-calendar.hide_host', 'boolval', false),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attribute('canModerateEvents', function (UserSerializer $serializer) {
            return $serializer->getActor()->can('event.moderate');
        })
        ->attribute('canStartEvents', function (UserSerializer $serializer) {
            return $serializer->getActor()->can('event.create');
        })
        ->attribute('canViewEvents', function (UserSerializer $serializer) {
            return $serializer->getActor()->can('event.view');
        }),
];
