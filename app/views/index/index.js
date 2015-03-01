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
        $("#slider-parent").append("<div class='col-sm-2'>"+'<div class="form-group"><div class="input-group"><span class="input-group-addon" id="basic-addon1">₪</span><input ng-change="change()" ng-init="slider'+i+'=2" min="0" max="200" ng-model="slider'+i+'" class="form-control" type="number" id="horiz_value'+i+'" value="2"></div></div></div>');
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

function createSliders(sliders, items) {
    console.log(items);
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
			$scope.image='http://donate.etcs.me/static/images/dla-logo.png';
			break;
		    }
	        }
            };
            item = items[5];
            $scope.item=item.text;
	    $scope.price=item.price;
	    $scope.image='http://donate.etcs.me/static/images/dla-logo.png';
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
        // then show form after bindings done
        $('form .panel').show();
        // and then slide the overall
        $(".overall").slideDown("slow", function() {
            // Animation complete.
        });
    });
}
