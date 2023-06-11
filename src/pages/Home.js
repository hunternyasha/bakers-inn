import homeImages from "../assets/components/HomeImages";
import homePageTitles from "../assets/components/HomePageTitles";
import Cards from "../assets/components/Cards";
import { NavLink } from "react-router-dom";
import ItemsFooter from "../assets/components/ItemsFooter";

const Home = () => {
  return (
    <>
      <section className="homePage container-fluid-fluid">

        <div className="banner">
          <div className="innerBanner container">
            <div className="bannerItem">
              <h1>{homePageTitles.title}</h1>
              <p className="mt-2 mb-4">{homePageTitles.secTitle}.</p>
              <button className="btn">{homePageTitles.buttonTitle}</button>
            </div>
            <div className="bannerItemTwo ">
              <img
                src={homeImages.image2}
                alt="White bread"
                srcset=""
                className="img-fluid"
              />
              <img
                src={homeImages.image3}
                alt="White bread"
                srcset=""
                className="img-fluid"
              />
              <img
                src={homeImages.image4}
                alt="White bread"
                srcset=""
                className="img-fluid"
              />
              <img
                src={homeImages.image5}
                alt="White bread"
                srcset=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="aboutBakerInn">
          <div className="container-fluid innerAboutBakersInn">
            <div className="row outerAboutBakerInn">
              <div className="col-lg-6 AboutBakerInnItem">
                <h2>{homePageTitles.aboutTitle}</h2>
              </div>
              <div className="col-lg-6 AboutBakerInnItem2">
                <p className="lead">{homePageTitles.aboutSecTitle}</p>
                <NavLink to="/Aboutus" className="btn">
                  {homePageTitles.buttonTitle}
                </NavLink>
              </div>
              <div className="col-lg-3 AboutBakerInnImages">
                <img src={homeImages.image6} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-3 AboutBakerInnImages">
                <img src={homeImages.image7} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-3 AboutBakerInnImages">
                <img src={homeImages.image8} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-3 AboutBakerInnImages">
                <img src={homeImages.image9} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="ourProducts">
          <h2 className="text-center pb-3">{homePageTitles.productsTitle}</h2>
          <div className="container-fluid OuterOurProducts">
            <div className="row innerOurProducts">
              <div className="col-lg-3 ourProductsImages">
                <img src={homeImages.image9} alt="" className="img-fluid" />
                <h3>Bread</h3>
              </div>
              <div className="col-lg-3 ourProductsImages">
                <img src={homeImages.image7} alt="" className="img-fluid" />
                <h3>Meat Pies</h3>
              </div>
              <div className="col-lg-3 ourProductsImages">
                <img src={homeImages.image11} alt="" className="img-fluid" />
                <h3>Scones</h3>
              </div>
              <div className="col-lg-3 ourProductsImages">
                <img src={homeImages.image12} alt="" className="img-fluid" />
                <h3>Donuts</h3>
              </div>
            </div>
            <NavLink to="/products" className="btn">
              {homePageTitles.productButtonTitle}
            </NavLink>
          </div>
        </div>

        <div className="bookATour">
          <div className="container-fluid outerBookTour">
            <div className="row g-5 innerBookTour">
              <div className="col-lg-6 bookTourItem">
                <div className="bookATourText">
                  <h2>{homePageTitles.tourTitle}</h2>
                  <p className="">{homePageTitles.secTourTitle}</p>
                  <button className="btn">
                    {homePageTitles.tourButtonTitle}
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={homeImages.image13} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="donationReq">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-lg-6">
                <img src={homeImages.image14} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <h2>{homePageTitles.donationTitle}</h2>
                <p>{homePageTitles.donationSecTitle}</p>
                <button className="btn">
                  {homePageTitles.donationButtonTitle}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="kidsCorner ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="kidsImage">
                  <img src={require('../assets/images/kisspng-arecaceae-leaf-palm-branch-palm-leaf-leaves-png-5ab1c5aa8368b7 1.png')} alt="" className="img-fluid" />
                  <img src={require('../assets/images/new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png')} alt="" className="img-fluid" />
                  <img src={require('../assets/images/2cd43b_19a192ae6ec44ffc9597044f7f063e0c_mv2 1.png')} alt="" className="img-fluid" />
                  <img src={require('../assets/images/mario-7da4a61a.webp')} alt="" className="img-fluid" />
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="kidsText">
                <h2>{homePageTitles.kidsTitle}</h2>
                <p>{homePageTitles.kidsSecTitle}</p>
                <NavLink to="/kidscorner" className="btn">
                  {homePageTitles.kidsButtonTitle}
                </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Cards />

        <div className="getNotified">
          <div className="container-fluid outerGetNot">
            <div className="row innerrGetNot">
              <div className="col-lg-6 getNotItem">
                <h2>{homePageTitles.promoTitle}</h2>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your email"
                    aria-label="your email"
                    
                  />
                  <button
                    className="btn "
                    type="button"
                    >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="col-lg-6 getNotItem">
                <div className="d-flex">
                  <img
                    src={homeImages.image2}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                  <img
                    src={homeImages.image3}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                  <img
                    src={homeImages.image4}
                    alt="White bread"
                    srcset=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ItemsFooter />
      </section>
    </>
  );
};

export default Home;
