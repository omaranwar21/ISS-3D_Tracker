/*
 * Copyright 2003-2006, 2009, 2017, 2020 United States Government, as represented
 * by the Administrator of the National Aeronautics and Space Administration.
 * All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License
 * at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * NASAWorldWind/WebWorldWind also contains the following 3rd party Open Source
 * software:
 *
 *    ES6-Promise – under MIT License
 *    libtess.js – SGI Free Software License B
 *    Proj4 – under MIT License
 *    JSZip – under MIT License
 *
 * A complete listing of 3rd Party software notices and licenses included in
 * WebWorldWind can be found in the WebWorldWind 3rd-party notices and licenses
 * PDF found in code  directory.
 */
/**
 * @exports LookAtNavigator
 */var i = 0
define([
        '../geom/Location',
        '../navigate/Navigator',
    ],
    function (Location,
              Navigator) {
        "use strict";

        /**
         * Constructs a look-at navigator.
         * @alias LookAtNavigator
         * @constructor
         * @augments Navigator
         * @classdesc Represents a navigator containing the required variables to enable the user to pan, zoom and tilt
         * the globe.
         */
        var LookAtNavigator = function () {
            Navigator.call(this);

            /**
             * The geographic location at the center of the viewport.
             * @type {Location}
             */
            this.lookAtLocation = new Location(30,30);

            /**
             * The distance from this navigator's eye point to its look-at location.
             * @type {Number}
             * @default 10,000 kilometers
             */
            this.range = 30e6; // TODO: Compute initial range to fit globe in viewport.

            // Development testing only. Set this to false to suppress default navigator limits on 2D globes.
            this.enable2DLimits = true;
        };

        LookAtNavigator.prototype = Object.create(Navigator.prototype);

        return LookAtNavigator;
    });