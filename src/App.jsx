import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* header */}
      <header>
        <section className='wrap-h'>
          <section className="h-1">
            <img src="https://kotsumet-official-store.com/cdn/shop/files/300-min1025_7b123e1c-2a24-4250-9928-993c0d6d5fb1_160x.png?v=1635132910" alt="KOTSUMET" />
            <ul>
              <li>MERCH</li>
              <li>INFO</li>
              <li>NEWS</li>
              <li>ABOUT</li>
              <li>SOCIAL</li>
            </ul>
            <ul>
              <li>💻</li>
              <li>🔍</li>
              <li>🛒</li>
            </ul>
          </section>
          
        </section>
      </header>

      {/* main */}
      <main>
        <section className='mainm-1'>
          <img src="https://kotsumet-official-store.com/cdn/shop/files/top_slider1_1080x.jpg" alt="kota-1" />
          <img src="https://kotsumet-official-store.com/cdn/shop/files/top_slider2_1080x.jpg" alt="kota-2" />
          <img src="https://kotsumet-official-store.com/cdn/shop/files/top_slider3_1080x.jpg" alt="kota-3" />
          <img src="https://kotsumet-official-store.com/cdn/shop/files/top_slider4_1080x.jpg" alt="kota-4" />
        </section><br />

        <section className='mainm-2'>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/tee_banner_1080x.jpg" alt="goods-page-1" />
            <p></p>
          </div>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/otter_gift_bonus_0359fa4f-c305-4a00-93e1-4cec74db63ec_1080x.jpg" alt="goods-page-2" />
            <p></p>
          </div>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/amazon_usa_2_8dce7520-bb5e-4bd3-9455-0737d965ff1b_1512x.jpg" alt="goods-page-3" />
            <p></p>
          </div>
        </section><br />

        <section className='mainm-3'>
          <img src="kotsumet-official-store.com/cdn/shop/files/line_stamp2_1080x.png?v=1766039061 1080w 281h," alt="Line-img" />

        </section><br />

        <section className='mainm-4'>
          <h2>OUR COLLECTION</h2>
          <ul>
            <li>ALL ITEMS</li>
            <li>ACCESSORY COLLECTION</li>
            <li>WEAR COLLECTION</li>
          </ul>
        </section><br />

        <section className='mainm-5'>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/otter_pop_t-shirt_5_1080x.jpg" alt="goods-1" />
            <p></p>
            <p><span></span></p>
          </div>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/otter_popart_tshirt_white_1080x.jpg" alt="goods-2" />
            <p></p>
            <p><span></span></p>
          </div>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/postcard3_1_1080x.jpg" alt="goods-3" />
            <p></p>
            <p><span></span></p>
          </div>
          <div>
            <img src="kotsumet-official-store.com/cdn/shop/files/postcard4-1_1080x.jpg" alt="goods-4" />
            <p></p>
            <p><span></span></p>
          </div>
        </section><br />

        <section className='mainm-6'>
          <img src="kotsumet-official-store.com/cdn/shop/files/top_about_img_720x.jpg" alt="about" />
          <div className='aboutm'>
            <h2>ABOUT</h2>
            <p>Welcome</p>
            <br />
            <button>VIEW MORE</button>
          </div>
        </section><br />

        <section className='mainm-7'>
          <h2>SNS</h2>
          <div className='snsm'>
            <div className='youtube'>
              <img src="" alt="youtube" />
              <p>YOUTUBE CHANNEL</p>
            </div>
            <div className='instagram'></div>
            <P>INSTAGRAM</P>
          </div>
        </section><br />

      </main>

      {/* footer */}
      <footer>
        <img src="kotsumet-official-store.com/cdn/shop/files/300-min1025_7b123e1c-2a24-4250-9928-993c0d6d5fb1_160x.png" alt="KOTSUMET" />
        <div className="foot">
          <div className="foot-1">
            <p>MENU</p><hr />
            <ul>
              <li>MERCH</li>
              <li>NEWS</li>
              <li>ABOUT</li>
              <li>SOCIAL</li>
              <li>INFO</li>
              <li>DIGITAL DOWNLOADS</li>
            </ul>
          </div>
          <div className="foot-2">
            <p>NEWSLETTER</p><hr />
            <h3>Sign up to get updates about upcoming products and the latest news.</h3>
            <div>
              <input type="text" placeholder='your-email@example.com' /><button>JOIN</button>
            </div>
          </div>
        </div>
        <select name="lauguage" id="lauguage">
          <option value="country">ENGLISH</option>
          <option value="country">日本語</option>
        </select>
        <select name="pay" id="pay">
          <option value="USD">USD$</option>
          <option value="JPY">JPY円</option>
        </select>
        <ul>
          <li>© KOTSUMET OFFICIALSTORE 2026</li>
          <li>PRIVACY POLICY</li>
          <li>ACT OF SPECIFIED COMMERCIAL TRANSACTIONS</li>
          <li>TERMS OF SERVICE</li>
          <li>REFUND POLICY</li>
        </ul>
        <p>CANCEL CONTRACT</p>

      </footer>
    </div>
  )
}

export default App
