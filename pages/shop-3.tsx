import {NextPage} from 'next';
import {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import PageProgress from "../src/components/common/PageProgress";
import {Navbar} from "../src/components/blocks/navbar";
import {ProductCard} from "../src/components/reuseable/product-cards";
import Pagination from "../src/components/reuseable/Pagination";
import ShopService from "../src/components/common/ShopService";
import {Footer8} from "../src/components/blocks/footer";
import SelectFilter from "../src/components/partshop/filters/SelectFilter";

const Shop: NextPage = () => {

  const [keyword, setKeyword] = useState('')

  const [familiesLoadingTries, setFamiliesLoadingTries] = useState(0)
  const [familiesLoading, setFamiliesLoading] = useState(false)
  const [families, setFamilies] = useState([])
  const [family, setFamily] = useState('')

  const [subFamiliesCancelToken, setSubFamiliesCancelToken] = useState(axios.CancelToken.source())
  const [subFamilies, setSubFamilies] = useState([])
  const [subFamily, setSubFamily] = useState('')

  const [subSubFamiliesCancelToken, setSubSubFamiliesCancelToken] = useState(axios.CancelToken.source())
  const [subSubFamilies, setSubSubFamilies] = useState([])
  const [subSubFamily, setSubSubFamily] = useState('')

  const [manufacturersLoadingTries, setManufacturersLoadingTries] = useState(0)
  const [manufacturersLoading, setManufacturersLoading] = useState(false)
  const [manufacturers, setManufacturers] = useState([])
  const [manufacturer, setManufacturer] = useState('')

  const [applianceTypesCancelToken, setApplianceTypesCancelToken] = useState(axios.CancelToken.source())
  const [applianceTypes, setApplianceTypes] = useState([])
  const [applianceType, setApplianceType] = useState('')

  const [applianceNumbersCancelToken, setApplianceNumbersCancelToken] = useState(axios.CancelToken.source())
  const [applianceNumbers, setApplianceNumbers] = useState([])
  const [applianceNumber, setApplianceNumber] = useState('')

  const [productsCancelToken, setProductsCancelToken] = useState(axios.CancelToken.source())
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)
  
  /* Load data when the page loaded*/
  /*useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      setProducts([]);
      productsCancelToken.cancel("Operation canceled due to new request.")
      let newCancelToken = axios.CancelToken.source()
      setProductsCancelToken(newCancelToken);
      axios
        .get('/api?art=artikelsuche&bigPicture=1&suchbg=&vgruppe=3100000000&geraeteid=', {
       // .get('/api?art=geraetefinder&categoriesfirst=&buchstabe=a&hersteller=&warensort=&vongeraet=&bisgeraet=' ,{
            cancelToken: newCancelToken.token
          }
        )
        .then(function (response) {
          setProducts(Object.values(response.data.treffer ?? {}))
          setLoading(false)
        })
        .catch(error => {
          console.log(error);
        });
    },100);
    }, [])*/

  /* Load Families */

  if (families.length === 0 && !familiesLoading && familiesLoadingTries < 5) {
    setFamiliesLoadingTries(familiesLoadingTries + 1);
    setFamiliesLoading(true)
    axios
      .get('/api?art=artikelgruppen')
      .then(function (response) {
        setFamilies(Object.values(response.data.vgruppenbaum ?? []))
      })
      .catch(error => {
        setFamiliesLoading(false)
      });
  }

  /* Load Manufacturers */

  if (manufacturers.length === 0 && !manufacturersLoading && manufacturersLoadingTries < 5) {
    setManufacturersLoadingTries(manufacturersLoadingTries + 1);
    setManufacturersLoading(true)

    axios.get('/api?art=geraetehersteller&fullList=1')
      .then(function (response) {
        setManufacturers(Object.values(response.data.hersteller ?? []))
      }).catch(error => {
      setManufacturersLoading(false)
    });
  } 

  /* Family Changed */

  useEffect(() => {
    setSubFamily('')
    setSubFamilies([])
    subFamiliesCancelToken.cancel("Operation canceled due to new request.")

    if (!family) return
    let [familyVal, hasChild] = family.split('-')
    if (hasChild !== '1') return

    let newCancelToken = axios.CancelToken.source()
    setSubFamiliesCancelToken(newCancelToken);

    axios
      .get('/api?art=artikelgruppen&vgruppe=' + familyVal, {
        cancelToken: newCancelToken.token
      })
      .then(function (response) {
        setFamilies(Object.values(response.data.vgruppenbaum ?? []))
      })
      .catch(error => {
        console.log(error);
      });
  }, [family])

  /* SubFamily Changed */

  useEffect(() => {
    setSubSubFamily('')
    setSubSubFamilies([])

    subSubFamiliesCancelToken.cancel("Operation canceled due to new request.")

    if (!subFamily) return
    let [subFamilyVal, hasChild] = subFamily.split('-')
    if (hasChild !== '1') return

    let newCancelToken = axios.CancelToken.source()
    setSubSubFamiliesCancelToken(newCancelToken);

    axios
      .get('/api?art=artikelgruppen&vgruppe=' + subFamilyVal, {
        cancelToken: newCancelToken.token
      })
      .then(function (response) {
        setSubSubFamilies(Object.values(response.data.vgruppenbaum ?? {}))
      })
      .catch(error => {
        console.log(error);
      });
  }, [subFamily])

  /* Manufacturer Changed */

  useEffect(() => {
    setApplianceType('')
    setApplianceTypes([])
    setApplianceNumber('')
    setApplianceNumbers([])

    let apiUrl = manufacturer ?
      ('/api?art=geraetefinder&hersteller=' + manufacturer) :
      ('/api?art=geraetefinder&categoriesfirst=1')

    applianceTypesCancelToken.cancel("Operation canceled due to new request.")

    let newCancelToken = axios.CancelToken.source()
    setApplianceTypesCancelToken(newCancelToken);

    axios.get(apiUrl, {
      cancelToken: newCancelToken.token
    }).then(function (response) {
      setApplianceTypes(Object.values(response.data.warensortliste ?? {}))
    }).catch(error => {
      console.log(error)
    })
  }, [manufacturer])

  /* Manufacturer or ApplianceType Changed */

  useEffect(() => {
    setApplianceNumber('')
    setApplianceNumbers([])

    applianceNumbersCancelToken.cancel("Operation canceled due to new request.")

    let newCancelToken = axios.CancelToken.source()
    setApplianceNumbersCancelToken(newCancelToken);

    axios
      .get('/api?art=geraetefinder&hersteller=' + manufacturer + '&warensort=' + applianceType, {
          cancelToken: newCancelToken.token
        }
      )
      .then(function (response) {
        setApplianceNumbers(Object.values(response.data.geraeteliste ?? {}))
      })
      .catch(error => {
        console.log(error);
      });
  }, [manufacturer, applianceType])

  /* Filter Products */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true)
      setProducts([]);

      productsCancelToken.cancel("Operation canceled due to new request.")

      let newCancelToken = axios.CancelToken.source()
      setProductsCancelToken(newCancelToken);

      let [familyVal] = (subSubFamily ? subSubFamily : (subFamily ? subFamily : family)).split('-');

      axios
        .get('/api'
          + '?art=' + (applianceNumber ? 'geraeteartikel' : 'artikelsuche')
          + '&bigPicture=1'
          + '&suchbg=' + keyword
          + '&vgruppe=' + familyVal
          + '&geraeteid=' + applianceNumber
          , {
            cancelToken: newCancelToken.token
          }
        )
        .then(function (response) {
          setProducts(Object.values(response.data.treffer ?? {}))
          setLoading(false)
        })
        .catch(error => {
          console.log(error);
        });
    }, 500)
    return () => clearTimeout(timeout)
  }, [keyword, family, subFamily, subSubFamily, applianceNumber])

  const productsList = () => {
    return products.map((product: {
      artikelaufschlag: string,
      artikelbezeichnung: string,
      artikelhersteller: string,
      artikelnummer: string,
      bestellbar: string,
      bild: string,
      ekpreis: string,
      ersatzartikel: string,
      lieferzeit: string,
      lieferzeit_in_tagen: string,
      morepics: string,
      nurnachnahme: string,
      storno_moeglich: string,
      picurlbig: string,
      thumbnailurl: string,
      vgruppenid: string,
      vgruppenname: string
    }) => {
      
      return (
        <ProductCard
          key={product.artikelnummer}
          className="col-md-6 col-xl-4"
          imageUrl={product.picurlbig ?? product.thumbnailurl}
          category={product.vgruppenid}
          regularPrice={ Number(product.ekpreis)}
          title={product.artikelbezeichnung}
          id = {product.artikelnummer}
          manufacturer = {product.artikelhersteller}
          canbeordered = {product.bestellbar}
          deliveryday = {product.lieferzeit_in_tagen}
        />
      );
    });
  }
  
  const loadingProcess = () => {
   if (!loading) return
    return (
      <div className="text-center">Loading products...</div>
    )
  }
  return (
    <Fragment>
        <PageProgress/>

      <header className="wrapper bg-light">
        <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"/>
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pb-14 pt-3">
            <div className="row gy-10">
              <div className="col-lg-9 order-lg-2">
                <div className="row gx-md-8 gy-10 gy-md-13 mb-10">
                  {productsList()}
                  {loadingProcess()}
                </div>
                <Pagination/>
              </div>
              <aside className="col-lg-3 sidebar">

                <div className="widget">
                  <h4 className="widget-title mb-3">Keyword</h4>

                  <div className="form-floating">
                    <input
                      className="form-control"
                      id={"ps-filter-input-keyword"}
                      type="text"
                      placeholder={"keyword"}
                      value={keyword}
                      onChange={(event) => setKeyword(event.target.value)}
                    />
                    <label htmlFor={"ps-filter-input-keyword"}>{"keyword"}</label>
                  </div>

                </div>

                <div className="widget">
                  <h4 className="widget-title mb-3">Family</h4>

                  <SelectFilter
                    id={'family'}
                    placeholder={'Find a Family'}
                    value={family}
                    setValue={setFamily}
                    maxHeight={'300px'}
                    options={
                      families.map((
                        option: {
                          vgruppenid: string,
                          vgruppenname: string,
                          untergruppen: string
                        }
                      ) => ({
                        id: option.vgruppenid + '-' + option.untergruppen,
                        title: option.vgruppenname
                      }))
                    }
                  />

                  <SelectFilter
                    id={'subFamily'}
                    placeholder={'Find a Family'}
                    value={subFamily}
                    setValue={setSubFamily}
                    maxHeight={'300px'}
                    options={
                      subFamilies.map((
                        option: {
                          vgruppenid: string,
                          vgruppenname: string,
                          untergruppen: string
                        }
                      ) => ({
                        id: option.vgruppenid + '-' + option.untergruppen,
                        title: option.vgruppenname
                      }))
                    }
                  />

                  <SelectFilter
                    id={'subSubFamily'}
                    placeholder={'Find a Family'}
                    value={subSubFamily}
                    setValue={setSubSubFamily}
                    maxHeight={'300px'}
                    options={
                      subSubFamilies.map((
                        option: {
                          vgruppenid: string,
                          vgruppenname: string,
                          untergruppen: string
                        }
                      ) => ({
                        id: option.vgruppenid + '-' + option.untergruppen,
                        title: option.vgruppenname
                      }))
                    }
                  />

                </div>

                <div className="widget">
                  <h4 className="widget-title mb-3">Manufacturer</h4>

                  <SelectFilter
                    id={'manufacturer'}
                    placeholder={'Find a Manufacturer'}
                    value={manufacturer}
                    setValue={setManufacturer}
                    maxHeight={'300px'}
                    options={
                      manufacturers.map((
                        option: string
                      ) => ({
                        id: option,
                        title: option
                      }))
                    }
                  />
                </div>

                <div className="widget">
                  <h4 className="widget-title mb-3">Appliance Type</h4>

                  <SelectFilter
                    id={'applianceType'}
                    placeholder={'Find an Appliance Type'}
                    value={applianceType}
                    setValue={setApplianceType}
                    maxHeight={'300px'}
                    options={
                      applianceTypes.map((
                        option: {
                          warensort: string,
                          name: string,
                          geraeteart: string
                        }
                      ) => ({
                        id: option.warensort,
                        title: option.geraeteart
                      }))
                    }
                  />
                </div>

                <div className="widget">
                  <h4 className="widget-title mb-3">Appliance Number</h4>

                  <SelectFilter
                    id={'applianceNumber'}
                    placeholder={'Find an Appliance Number'}
                    value={applianceNumber}
                    setValue={setApplianceNumber}
                    maxHeight={'300px'}
                    options={
                      applianceNumbers.map((
                        option: {
                          vongeraet: string,
                          bisgeraet: string
                        }
                      ) => ({
                        id: option.vongeraet,
                        title: option.bisgeraet
                      }))
                    }
                  />
                </div>

              </aside>
            </div>
          </div>
        </section>

        <ShopService/>
      </main>

      <Footer8/>


    </Fragment>
  );
};

export default Shop;
