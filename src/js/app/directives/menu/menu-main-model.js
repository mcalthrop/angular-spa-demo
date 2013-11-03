/* global angular */

/**
 * @ngdoc object
 * @name MenuMainModel
 * @function
 * @description
 *
 * This is the model for the main menu.
 *
 * @note Because the code structure is tightly linked to the menu structure,
 * the menu items are defined here, rather than retrieving them from a service.
 *
 */

angular.module(
        'MenuMainModelModule',
        [
        ]
    )
    .factory(
    'MenuMainModel',
    function () {
        var _HOME = 'home',
            _PROFILES = 'profiles',
            _RESOURCES = 'resources',
            _ABOUT = 'about',
            _currentMenuItemId = _HOME,
            _menuItems = [
                {
                    "id": _HOME,
                    "text": "home",
                    "url": "#/home"
                },
                {
                    "id": _PROFILES,
                    "text": "profiles",
                    "url": "#/profiles"
                },
                {
                    "id": _RESOURCES,
                    "text": "resources",
                    "url": "#/resources"
                },
                {
                    "id": _ABOUT,
                    "text": "about",
                    "url": "#/about"
                }
            ];

        return {
            /**
             * @ngdoc property
             * @name MenuMainModel#HOME
             * @constant
             * @propertyOf MenuMainModel
             * @description The menu id for the home page.
             */
            HOME: _HOME,
            /**
             * @ngdoc property
             * @name MenuMainModel#PROFILES
             * @constant
             * @propertyOf MenuMainModel
             * @description The menu id for the profiles page.
             */
            PROFILES: _PROFILES,
            /**
             * @ngdoc property
             * @name MenuMainModel#RESOURCES
             * @constant
             * @propertyOf MenuMainModel
             * @description The menu id for the resources page.
             */
            RESOURCES: _RESOURCES,
            /**
             * @ngdoc property
             * @name MenuMainModel#ABOUT
             * @constant
             * @propertyOf MenuMainModel
             * @description The menu id for the about page.
             */
            ABOUT: _ABOUT,
            /**
             * @ngdoc method
             * @name MenuMainModel#getCurrentMenuItemId
             * @methodOf MenuMainModel
             * @description
             *
             * Getter for the current menu item id.
             *
             * @returns {String} The current menu id
             *
             */
            getCurrentMenuItemId: function () {
                return _currentMenuItemId;
            },
            /**
             * @ngdoc method
             * @name MenuMainModel#setCurrentMenuItemId
             * @methodOf MenuMainModel
             * @description
             *
             * Setter for the current menu item id.
             *
             * @param {String} newCurrentMenuItemId The new value for current menu item id.
             *      Must be one of the constants provided on this object.
             * @returns {void} void
             *
             */
            setCurrentMenuItemId: function (newCurrentMenuItemId) {
                _currentMenuItemId = newCurrentMenuItemId;
            },
            /**
             * @ngdoc method
             * @name MenuMainModel#getMenuItems
             * @methodOf MenuMainModel
             * @description
             *
             * Getter for the array of menu items.
             *
             * @returns {Array} The array of menu items
             *
             */
            getMenuItems: function () {
                return _menuItems;
            }
        };
    }
);

/* EOF */