const scan=function(){
	monaca.BarcodeScanner.scan(
		(result)=>{
			if(result.cancelled){
				// scan cancelled
			} 
			else{
				// scan
				const detected_text = result.data.text;
				const detected_format = result.data.format;
			}
		}, 
		(error)=>{
			// permission error
			const error_message = error;
		}, 
		{
			'oneShot': true,
			'timeoutPrompt': {
				'show': true,
				'timeout': 5,
				'prompt': 'Not detected'
			}
		})
};
//https://ja.docs.monaca.io/reference/power_plugins/monaca-plugin-scan-barcode// This is a JavaScript file
