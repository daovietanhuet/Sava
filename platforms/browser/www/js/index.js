/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

app.initialize();

$('.main-gallery').flickity({
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: function( index ) {
            $(`#item${index +1}`).prop('checked', true);
        }
    }
});

$( "#item1" ).click(function() {
    $('.main-gallery').flickity('select', 0, false, true);
});

$( "#item2" ).click(function() {
    $('.main-gallery').flickity('select', 1, false, true);
});

$( "#item3" ).click(function() {
    $('.main-gallery').flickity('select', 2, false, true);
});

$( "#item4" ).click(function() {
    $('.main-gallery').flickity('select', 3, false, true);
});

$( "#item5" ).click(function() {
    $('.main-gallery').flickity('select', 4, false, true);
});

$( "#item6" ).click(function() {
    $('.main-gallery').flickity('select', 5, false, true);
});

$('#ads').flickity({
    contain: true,
    prevNextButtons: false,
    freeScrool: true,
    wrapAround: true,
    autoPlay: 1500,
    pauseAutoPlayOnHover: false,
    on: {
        dragStart: function() {
            $('.main-gallery').flickity("destroy");
        },
        dragEnd: function() {
            $('.main-gallery').flickity();
        }
    }
})