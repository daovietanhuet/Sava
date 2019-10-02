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

let currentPage = 0;

$(".carousel").carousel({interval: false, duration: 200})

$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') {$(this).carousel('next'); currentPage ++; currentPage = currentPage%6;}
        if (direction == 'right') {$(this).carousel('prev'); currentPage --; currentPage = currentPage < 0 ? 4: currentPage%6;}
        $(`#item${currentPage + 1}`).prop("checked", true);
    },
    allowPageScroll:"vertical"
  
  });

$("#item1").click(function(){
    $(".carousel").carousel(0);
    currentPage = 0;
});

$("#item2").click(function(){
    $(".carousel").carousel(1);
    currentPage = 1;
});

$("#item3").click(function(){
    $(".carousel").carousel(2);
    currentPage = 2;
});

$("#item4").click(function(){
    $(".carousel").carousel(3);
    currentPage = 3;
});

$("#item5").click(function(){
    $(".carousel").carousel(4);
    currentPage = 4;
});

$("#item6").click(function(){
    $(".carousel").carousel(5);
    currentPage = 5;
});