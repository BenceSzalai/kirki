wp.customize.controlConstructor['radio-buttonset'] = wp.customize.Control.extend( {
	ready: function() {
		var control = this;
		this.container.on( 'click', 'label.switch-label', function() {
			control.setting.set( jQuery( this ).val() );
		});
	}
});
