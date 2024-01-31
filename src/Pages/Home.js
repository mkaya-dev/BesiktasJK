import React from 'react'
import "./All.css"
import Besiktas from "../Images/besıktas.png"
import stad from "../Images/stad.jpg"
import adidas from "../Images/adidas.png"
import forma1 from "../Images/bjkf.jpg"
import forma2 from "../Images/bjkf2.jpg"
import forma3 from "../Images/bjk3.jpg"
import ReactPlayer from 'react-player'
import heykel from "../Images/heykel.jpg"
import bjksponsor from "../Images/bjksponsor.jpg"
import stadd from "../Images/altNavbar.jpg"

const Home = () => {


  return (
    <>
      <div className='kutu1'>
        <div style={{ width: 840, height: 800 }} className='sol'>
          <h1 style={{ marginTop: 120 }}>Besıktas JK</h1>
          <h5 >Beşiktaş, Beşiktaş Jimnastik Kulübü'nün Süper Lig'de <br />  mücadele eden futbol takımı. 1903 yılında Bereket <br /> Jimnastik Kulübü adıyla kurulan Beşiktaş JK'nin,<br /> Ağustos 1911'de kurulan şubesidir.</h5><br />
          <button className='btn btn-light'><a style={{ textDecoration: "none", color: "black" }} className='button1' href='#tupras'>Tüpras Stadyumu</a></button>
        </div>
        <div style={{ width: 840, height: 800 }} className='a sag'>
          <img src={Besiktas} style={{ width: 330, marginLeft: 150 }} />
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


      <div id='tupras' style={{ marginTop: 100, marginBottom: -28 }} className='kutu2'>
        <div style={{ width: 840 }} className='a sol'>
          <img src={stad} style={{ width: 530 }} />
        </div>
        <div className='sag'>
          <h2>Tüpras Park</h2>
          <h5>Beşiktaş Park ya da sponsorluk anlaşmas<br/> gereği Tüpraş Stadyumu,<br /> İstanbul'un Beşiktaş ilçesinde bulunan<br/> 42.590 izleyici kapasiteli çok<br /> amaçlı stadyum. Ev sahibi Beşiktaş<br/> futbol takımının eski stadyumu BJK<br /> İnönü Stadyumu yıkılarak aynı arazi üzerine<br/> inşa edilmiştir.</h5><br />
          <button className='btn btn-light'><a style={{ textDecoration: "none", color: "black" }} className='button1' href='#forma'>2023/2024 Forması</a></button>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div id='forma' style={{ marginTop: 100 }} className='kutu3'>
        <div  className='sol'>
          <img src={adidas} style={{ width: 350, marginLeft: 90 }} />
        </div>
        <div style={{ height: 500,marginTop:-52 }} className='a sag'>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <img src={forma1} style={{ width: 200 }} />
              </div>
              <div class="col">
                <img src={forma2} style={{ width: 200 }} />
              </div>
              <div class="col" style={{ marginRight: -30 }}>
                <img src={forma3} style={{ width: 200 }} />
              </div>
            </div><br /><br />
            <button style={{ width: 250 }} className='btn btn-light'><a style={{ textDecoration: "none", color: "black" }} className='button1' href='#bjk'>Besiktaş Forma Tanıtımı</a></button>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style={{ marginTop: -28 }} id='bjk' className='kutu4'>
        <div className='a sol'>
          <ReactPlayer url='https://www.youtube.com/watch?v=wyysrVIadvc' />
        </div>
        <div className='sag'>
          <h6 style={{ marginTop: -99 }}><h3>Beşiktaş:</h3> Kulübü, Türkiye Cumhuriyeti'nin  100. yılı ve siyah-beyazlı kulübün 120. yılı <br /> anısına, İstanbul Büyükşehir Belediyesi tarafından<br /> yenilenen Beşiktaş İskele Meydanı'na yaptırdığı kartal<br /> heykelinin açılışını yaptı.</h6>
          <img src={heykel} style={{ width: 600 }} /><br /><br />
          <button style={{ width: 230, marginTop: -10, marginLeft: 180 }} className='btn btn-light'><a style={{ textDecoration: "none", color: "black" }} className='button1' href='#100yıl'>Besiktaş 100.yıl Forma Tanıtımı</a></button>


        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div id='100yıl' className='kutu5'>
        <div className='sol'>
          <img src={bjksponsor} style={{ width: 450, marginLeft: 50, marginTop: 50 }} />
        </div>
        <div style={{ marginTop: -82 }} className='a sag'>
          <ReactPlayer url='https://www.youtube.com/watch?v=FF6SMBlWG_0' />
        </div>

      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className='kutu6'>
        <div style={{marginTop:35,width:840,height:300,color:"white"}} className='c sol'>
          <ul>
            <li>Satış Noktalarımız</li><br /><br />
            <li>Hakkımızda</li><br /><br />
            <li>Mesafeli Satış Sözleşmesi</li><br /><br />
            <li>Gizlilik ve KVKK</li>
          </ul>
          <ul>
            <li>İade Koşuları</li><br /><br />
            <li>Korsan İhbar</li><br /><br />
            <li>Cayma Hakkı</li>
          </ul>
        </div>
        <div className='sag'>
          <ul>
            <button className='button'><img src={Besiktas} style={{width:23}} /></button>
            <button className='button'><i class="fa-brands fa-facebook-f"></i></button>
            <button className='button'><i class="fa-brands fa-instagram"></i></button>
            <button className='button'><i class="fa-brands fa-twitter"></i></button>
            <button className='button'><i class="fa-brands fa-youtube"></i></button>
          </ul>
          <ul>
            <li> Franchise Başvuru Formu</li><br /><br />
            <li>E-Katalog</li><br /><br />
            <li>Yurt Dışına Kargo Hizmeti</li><br /><br />
            <li>Sıkça Sorulan Sorular</li>
          </ul>
          <ul>
            <li>İletişim</li><br/><br/>
            <li>Çerez Ayarları</li>
          </ul>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div style={{marginTop:-250,marginRight:-50}} className='sag'>
      <a href='#'><button style={{border:"1px solid white",height:40}} ><img src={Besiktas} style={{width:10}} />Yukarı Don</button></a>
      </div>

     










    </>
  )
}

export default Home;