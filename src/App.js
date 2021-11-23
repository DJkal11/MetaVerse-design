

function App() {
  return (
    <div className="bg-gray-700 w-screen h-screen" style={{fontFamily: 'Montserrat'}}>
     
     <div className="flex flex-row">
       <div className="mt-30 p-10 ">
          <h1 className="text-6xl text-white">Multi-Chain </h1>
          <h1 className="text-6xl text-white">Next Generation</h1>
          <h1 className="text-6xl text-white">Platform</h1>
          <p className="text-2xl text-gray-200 pt-10">TheMeta is a platform for VR gaming & Play2Earn projects in metaverse</p>

         <div className="bg-gray-600 rounded-2xl w-9/12 mt-5 pt-1">
           <label className="text-sm ml-5 text-white" for="1">Current APY</label><br />
           <input id="1" className="m-5 mt-0 p-2 bg-gray-500 rounded-3xl w-30" type="text" /><br />
           <label className="text-sm ml-5 text-white" for="2">My Stake XMTA-AMTALP</label><br />
           <input id="2" className="m-5 mt-0 p-2 bg-gray-500 rounded-3xl w-30" type="text" />
           <br />
           <label className="text-sm ml-5 text-white" for="3">Balance: 0</label><br />
           <input id="3" className="m-5 mt-0 p-2 w-80 bg-gray-500 rounded-3xl" type="text" />
           <br />
           <button className="text-white bg-purple-600 w-80 rounded-3xl p-3 m-5 ">Connect wallet to stake</button>

         </div>
       </div>

       <div className="w-full h-full">
         <img className="" src="/flame-vr-game-1.png" alt="pic" />
       </div>

     </div>

     
    </div>
  );
}

export default App;
