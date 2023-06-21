import Cards from "../assets/components/Cards";
import ItemsFooter from "../assets/components/ItemsFooter";
import PageTransions from "../assets/components/PageTransions";

const recipes = {
  recipesTitle:'The Finest of Baker’s Tik Tok Community Recipes',
  recipesTitle2:`Make the finest croissants worthy of    Paris from your     home
  #Croissant #Zimbabwe #Paris #Baker’s_Inn`,
  recipesImg:require('../assets/images/Ellipse 10.png'),
  recipesTitle4:'The_Bakers_Inn'
}

const Recipes = () => {
  return (
    <>
      <PageTransions>
        <section>
          <div className="tikTokFeed">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <h2>{recipes.recipesTitle}</h2>
                  <p>{recipes.recipesTitle2}</p>
                  <p><img src={recipes.recipesImg} alt="" className="img-fluid" /> <span>{recipes.recipesTitle4}</span></p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="row g-2">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <img src={require('../assets/images/Rectangle701.png')} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <img src={require('../assets/images/Rectangle702.png')} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <img src={require('../assets/images/Rectangle703.png')} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <img src={require('../assets/images/Rectangle704.png')} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Cards />
          <ItemsFooter />
        </section>
      </PageTransions>
    </>
  );
};

export default Recipes;
