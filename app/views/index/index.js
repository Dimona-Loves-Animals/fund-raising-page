// save changes to local storage. not working fully yet.
useLocalStorage = false;

function createSlider(Y, text, i) {
	// Function to update the input value from the Slider value
	function updateInput( e ) {
	    if (!this.run) {
    		this.set( "value", e.newVal );
		$('#'+this._node.id).trigger('input');
	    }
	    this.run = false;
	}

	// Function to pass input value back to the Slider
	function updateSlider( e ) {
	    this.run = true;
	    var data   = this.getData(),
		slider = data.slider,
		value  = parseInt( this.get( "value" ), 10 );

	    if ( data.wait ) {
		data.wait.cancel();
	    }

	    // Update the Slider on a delay to allow time for typing
	    data.wait = Y.later( 200, slider, function () {
		data.wait = null;
		this.set( "value", value );
	    } );
	}

	$("#slider-parent").append("<div class='col-sm-5'><label for='slider'"+i+">"+text+"</label></div>");
	$("#slider-parent").append("<div class='col-sm-5'><div id='slider"+i+"'></div></div>");

	// Default everything
        var slider = new Y.Slider({
    	    min : 0,
    	    max : 200,
    	    value: 2,
    	    length: Y.one('#slider'+i).getComputedStyle('width'),
        });

        slider.render("#slider"+i);
        // Subscribe to the Slider's valueChange event, passing the input as the 'this'
        $("#slider-parent").append("<div class='col-sm-2'>"+'<div class="form-group"><div class="input-group"><span class="input-group-addon" id="basic-addon1">₪</span><input ng-change="change()" ng-init="slider'+i+'=2" min="0" max="200" ng-model="slider'+i+'" class="form-control" type="number" id="horiz_value'+i+'" name="horiz_value'+i+'" value="2"></div></div></div>');
        // restrict numbers
        document.getElementById('horiz_value'+i).onkeydown = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if ( key!=8 && isNaN( String.fromCharCode(key) ) ) return false;
            //if (Number(e.srcElement.valueAsNumber+String.fromCharCode(e.keyCode)) > 200) {
    	//	document.getElementById(e.srcElement.id).value = 200;
	//	$('#'+e.srcElement.id).trigger('input');
    	//	return false;
    	//    }
        }
        var xInput = Y.one( "#horiz_value"+i );
        slider.after( "valueChange", updateInput, xInput );
        // Subscribe the opposite way - from input to slider
	xInput.setData( { slider: slider } );
	xInput.on( "keyup", updateSlider );
	xInput.on( "mouseup", updateSlider );
}

/* jQuery.values: get or set all of the name/value pairs from child input controls   
 * @argument data {array} If included, will populate all child controls.
 * @returns element if data was provided, or array of values if not
 */
$.fn.values = function(data) {
    var els = $(this).find(':input').get();

    if(typeof data != 'object') {
        // return all data
        data = {};

        $.each(els, function() {
            if (this.name && !this.disabled && (this.checked
                            || /select|textarea/i.test(this.nodeName)
                            || /text|hidden|number|password/i.test(this.type))) {
                data[this.name] = $(this).val();
            }
        });
        return data;
    } else {
        $.each(els, function() {
            if (this.name && data[this.name]) {
                if(this.type == 'checkbox' || this.type == 'radio') {
                    $(this).attr("checked", (data[this.name] == $(this).val()));
                } else {
                    $(this).val(data[this.name]);
                }
            }
        });
        return $(this);
    }
};

function createSliders(sliders, items) {
    angular.module('donateApp', [])
        .controller('donateController', ['$scope', function($scope) {
    	    $scope.sum = function() {
    		return $scope.slider0 +
    		    $scope.slider1 +
    		    $scope.slider2 +
    		    $scope.slider3 +
    		    $scope.slider4 +
    		    $scope.slider5 +
    		    $scope.slider6 +
    		    $scope.slider7 +
    		    $scope.slider8 +
    		    $scope.slider9;
    	    }
            $scope.change = function() {
        	var sum = Number($scope.sum());
            	for (i = 0; i < items.length; i++) {
            	    item = items[i];
		    if (Number( item.price ) >= sum) {
			$scope.item=item.text;
			$scope.price=item.price;
			$scope.image='http://vignette1.wikia.nocookie.net/fantendo/images/b/bc/MK7_Item_Box.png/revision/latest?cb=20120823005645';
			break;
		    }
	        }
            };
            item = items[5];
            $scope.item=item.text;
	    $scope.price=item.price;
	    $scope.image='http://vignette1.wikia.nocookie.net/fantendo/images/b/bc/MK7_Item_Box.png/revision/latest?cb=20120823005645';
        }]);
    // create sliders
    YUI().use('slider', function (Y) {
	// create sliders
	for (i = 0; i < sliders.length; i++) {
    	    createSlider(Y, sliders[i], i);
        }
        // hide spinner. we have the sliders now
        $('.fa-spinner').hide();
        // start angular
        angular.bootstrap(document, ['donateApp']);

	if (useLocalStorage) if (Modernizr.localstorage) {
	    // console.log('window.localStorage is available!');
	    $(':input').on('input change keyup', function(){
    		localStorage.formData = JSON.stringify($('form').values());
    	    });
    	    if(localStorage.formData){
    		$('form').values(JSON.parse(localStorage.formData));
    		for (i = 2; i < sliders.length; i++) {
    		    //$('#horiz_value'+i).trigger('input');
	        }
    	    }
	}
        // then show form after bindings done
        //$("form .panel").animate({width:'toggle'},155, function() {
        //$("form .panel").slideDown("slow", function() {
        //$('form .panel').show();
        $("form .panel").fadeIn("normal", function() {
    	    // and then slide the overall
    	    $(".overall").slideDown("slow", function() {
        	// Animation complete.
    	    });
        });
    });
}
