/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockProfilesDataJsonModule',
            [
            ]
        )
        .value(
        'MockProfilesDataJson',
        {
            "set1": [
                {
                    "name": {
                        "first": "name.first.1",
                        "last": "name.last.1"
                    },
                    "data": {
                        "image": {
                            "source": "img/thm/image.1.jpg",
                            "alt": "",
                            "title": ""
                        },
                        "links": [
                            {
                                "text": "link.1.text.1",
                                "url": "link.1.url.1"
                            },
                            {
                                "text": "link.1.text.2",
                                "url": "link.1.url.2"
                            },
                            {
                                "text": "link.1.text.3",
                                "url": "link.1.url.3"
                            }
                        ],
                        "blurb": [
                            "blurb.1.para.1",
                            "blurb.1.para.2",
                            "blurb.1.para.3"
                        ],
                        "skillsMatrix": [
                            "skills.1.1",
                            "skills.1.2",
                            "skills.1.3",
                            "skills.1.4",
                            "skills.1.5"
                        ]
                    }
                },
                {
                    "name": {
                        "first": "name.first.2",
                        "last": "name.last.2"
                    },
                    "data": {
                        "image": {
                            "source": "img/thm/image.2.jpg",
                            "alt": "",
                            "title": ""
                        },
                        "links": [
                            {
                                "text": "link.2.text.1",
                                "url": "link.2.url.1"
                            },
                            {
                                "text": "link.2.text.2",
                                "url": "link.2.url.2"
                            },
                            {
                                "text": "link.2.text.3",
                                "url": "link.2.url.3"
                            }
                        ],
                        "blurb": [
                            "blurb.2.para.1",
                            "blurb.2.para.2",
                            "blurb.2.para.3"
                        ],
                        "skillsMatrix": [
                            "skills.2.1",
                            "skills.2.2",
                            "skills.2.3",
                            "skills.2.4",
                            "skills.2.5"
                        ]
                    }
                }
            ],
            "set2": [
                {
                    "name": {
                        "first": "2.name.first.1",
                        "last": "2.name.last.1"
                    },
                    "data": {
                        "image": {
                            "source": "2.img/thm/image.1.jpg",
                            "alt": "",
                            "title": ""
                        },
                        "links": [
                            {
                                "text": "2.link.1.text.1",
                                "url": "2.link.1.url.1"
                            },
                            {
                                "text": "2.link.1.text.2",
                                "url": "2.link.1.url.2"
                            },
                            {
                                "text": "2.link.1.text.3",
                                "url": "2.link.1.url.3"
                            }
                        ],
                        "blurb": [
                            "2.blurb.1.para.1",
                            "2.blurb.1.para.2",
                            "2.blurb.1.para.3"
                        ],
                        "skillsMatrix": [
                            "2.skills.1.1",
                            "2.skills.1.2",
                            "2.skills.1.3",
                            "2.skills.1.4",
                            "2.skills.1.5"
                        ]
                    }
                },
                {
                    "name": {
                        "first": "2.name.first.2",
                        "last": "2.name.last.2"
                    },
                    "data": {
                        "image": {
                            "source": "2.img/thm/image.2.jpg",
                            "alt": "",
                            "title": ""
                        },
                        "links": [
                            {
                                "text": "2.link.2.text.1",
                                "url": "2.link.2.url.1"
                            },
                            {
                                "text": "2.link.2.text.2",
                                "url": "2.link.2.url.2"
                            },
                            {
                                "text": "2.link.2.text.3",
                                "url": "2.link.2.url.3"
                            }
                        ],
                        "blurb": [
                            "2.blurb.2.para.1",
                            "2.blurb.2.para.2",
                            "2.blurb.2.para.3"
                        ],
                        "skillsMatrix": [
                            "2.skills.2.1",
                            "2.skills.2.2",
                            "2.skills.2.3",
                            "2.skills.2.4",
                            "2.skills.2.5"
                        ]
                    }
                }
            ]
        }
    );
}(angular));

/* EOF */