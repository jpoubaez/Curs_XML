

try {
			if(typeof window.parent.raiSPPassback == 'function'){
				window.parent.raiSPPassback();
			}else{
				if(typeof raiSPPassback == 'function'){
					raiSPPassback();
				}
			}
		}
		catch(err) {
			if(typeof raiSPPassback == 'function'){
				raiSPPassback();
			}
		}



		try {
			if(typeof window.parent.raiOOPassback == 'function'){
				window.parent.raiOOPassback();
			}else{
				if(typeof raiOOPassback == 'function'){
					raiOOPassback();
				}
			}
		}
		catch(err) {
			if(typeof raiOOPassback == 'function'){
				raiOOPassback();
			}
		}
