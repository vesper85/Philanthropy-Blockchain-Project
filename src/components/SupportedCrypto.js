import React from "react";
import ethereumlogo from "./icons/ethereumlogo.png";

export const SupportedCrypto = () => {
  return (
    <div>
      <div id="Supported Cryptocurrencies">
        <div className="container pt-5 pb-3" id="featured-3">
          <h3 className="Crypto-header pb-2 border-bottom border-info">
            Supported Cryptocurrency
          </h3>
          <div className="row g-4 px-5 py-4 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 ">
            
            <div className="row all ">
           
              <div className="col-2">
              <h2 className="Crypto-subtitle pb-2">Ethereum</h2>

                <div className="feature ">
                  <div className="feature-icon col-sm-1">
                    <img
                      className=" ethereumlogo rounded  d-block pb-4"
                      src={ethereumlogo}
                      alt="ethereumlogo"
                    />
                  </div>
                </div>
                </div>

                <div className="col-10">
                  <p className="Crypto-text">
                    Ethereum is a technology that's home to digital money,
                    global payments, and applications. The community has built a
                    booming digital economy, bold new ways for creators to earn
                    online, and so much more. It's open to everyone, wherever
                    you are in the world – all you need is the internet. Today,
                    billions of people can’t open bank accounts, others have
                    their payments blocked. Ethereum's decentralized finance
                    (DeFi) system never sleeps or discriminates. With just an
                    internet connection, you can send, receive, borrow, earn
                    interest, and even stream funds anywhere in the world.
                    Ethereum isn't just for digital money. Anything you can own
                    can be represented, traded and put to use as non-fungible
                    tokens (NFTs). You can tokenise your art and get royalties
                    automatically every time it's re-sold. Or use a token for
                    something you own to take out a loan. The possibilities are
                    growing all the time.
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
