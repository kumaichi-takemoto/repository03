//https://mbaas.nifcloud.com/doc/current/introduction/div_quickstart_javascript_monaca.html#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E6%96%B0%E8%A6%8F%E4%BD%9C%E6%88%90
// APIキーの設定とSDK初期化
//      var ncmb = new NCMB("bce14324da9e5e2653a588de25d4bee45a7a20f0b43cd510f3ff9fa61ff64c2e","56b1c6782f09aa5a47fd4f2e6ae758d510aafdb5b03f5ef919157e93baab9a9e"); 
// 保存先クラスの作成
//      var TestClass = ncmb.DataStore("TestClass");
const TestClass=new NCMB(
	'bce14324da9e5e2653a588de25d4bee45a7a20f0b43cd510f3ff9fa61ff64c2e',
	'56b1c6782f09aa5a47fd4f2e6ae758d510aafdb5b03f5ef919157e93baab9a9e').DataStore('TestClass'); 

// 値を設定と保存
const f=()=>{
	// 保存先クラスのインスタンスを生成
  const testClass = new TestClass();

	testClass
		.set("message", "Hello, NCMB!")
	  .save()
	  .then(function(object){
  		// 保存に成功した場合の処理
		})
	  .catch(function(err){
			// 保存に失敗した場合の処理
		});
};
