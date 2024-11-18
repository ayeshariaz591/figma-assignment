export default function Home() {
  return (
    // navbar //

    <div className="w-[1440px] h-[1132px] top-[-590px] left-[-720px] bg-[#252B42]">
      <nav className=" w-[1322px] h-[91px] flex justify-between items-center mx-59">
        <div className="w-[187px] h-[58px] top-[17px] left-[136px] flex justify-center items-center ml-[136px]">
          <h3 className="w-[152px] h-[32px] top-[13px] font-bold text-[24px] font-montserrat leading-[32px] tracking-[0.1px] flex text-white">
            BrandName
          </h3>
        </div>
        {/* links */}
        <div className="w-[815px] h-[58px] top-[16px] left-[364px] flex justify-between place-items-center ml-[41px]">
          <ul className="flex justify-center items-center w-[275px] h-[24px] top-[17px] gap-[21px] my-[17px]">
            <li className="w-[43px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#FFFFFF] ml-[21px]">
              Home
            </li>
            <li className="w-[59px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#FFFFFF] ml-[21px]">
              Product
            </li>
            <li className="w-[52px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#FFFFFF] ml-[21px]">
              Pricing
            </li>
            <li className="w-[58px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#FFFFFF] ml-[21px]">
              Contact
            </li>
          </ul>

          {/* buttons */}
          <div className="flex justify-center items-center w-[189px] h-[52px] top-[3px] left-[626px] gap-[45px] ml-[351px]">
            <button className="w-[41px] h-[22px] flex items-center font-bold text-[14px] leading-[22px] tracking-[0.2px] text-right font-montserrat text-[#FFFFFF] my-[15px]">
              Login
            </button>

            <div className="w-[214px] h-[52px] top-[3px] left-[626px] gap-[45px] mx-[45px]">
              <button className="w-[110px] h-[52px] py-[15px] px-[25px] gap-[15px] rounded-[5px] bg-[#23A6F0] font-bold text-[14px] leading-[22px] tracking-[0.2px] font-montserrat text-[#FFFFFF]">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-[1046px] h-[1028px] top-[104px] left-[196] py-[80px] gap-[80px] flex justify-center mx-[197px] mt-[13px]">
        <div className="w-[701px] h-[496px]">
          <main className="w-[699px] h-[496px] py-[40px] gap-[40px]">
            <h5 className="w-[77px] h-[24px] leading-[24px] tracking-[0.1px] text-cyan-400 font-bold font-montserrat text-[16px] ml-72 mb-6">
              Welcome
            </h5>

            <h1 className="w-[542px] h=[160px] font-bold leading-[80px] tracking-[0.2px] text-center text-[58px] font-montserrat text-[#FFFFFF] ml-16 mb-6">
              Selling on the internet like a pro
            </h1>

            <h4 className="leading-[30px] tracking-[0.2px] w-[536px] h-[60px] font-normal text-[20px] text-center font-montserrat text-[#FFFFFF] ml-16 mb-6">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>

            {/* button */}
            <div className="w-[365px] h-[52] gap-[10px] flex flex-row justify-end items-center mt-6 ml-40">
              <div className="w-[193px] h-[52px] rounded-[5px] px-[40px] py-[15px] gap-[10px] bg-[#23A6F0]">
                <button className="w-[113px] h-[22px] font-bold text-[14px] text-center text-[#FFFFFF] leading-[22px] tracking-[0.2px] font-montserrat">
                  Get Quote Now
                </button>
              </div>

              <div className="w-[162px] h-[52px] border-[1px] rounded-[5px] py-[15px] px-[40px] gap-[10px] border-[#23A6F0]">
                <button className="w-[82px] h-[22px]font-bold text-[14px] text-center  text-[#23A6F0] leading-[22px] tracking-[0.2px] font-montserrat">
                  Learn More
                </button>
              </div>
            </div>
          </main>

          {/*Cards*/}
          <div className="w-[1046px] h-[292px] gap-[30px] flex flex-row -ml-44">
            {/* card 1 */}

            <div className=" w-[328px] h-[292px]  bg-white py-[35px] px-[40px] gap-[20px]">
              <div className="w-14 h-16 bg-[#FFDCD1] rounded-[10px] py-[22px] px-[19px] gap-[10px]"></div>

              <h5 className="w-[135px] h-[24px] text-base font-bold font-montserrat leading-[24px] tracking-[0.1px] text-[#252B42] mt-5">
                training Courses
              </h5>

              <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>

              <p className="w-[222px] h-[60px] text-sm font-normal leading-[20px] tracking-[0.2px] text-[#737373] mt-5 font-montserrat">
                The gradual accumulation of information about atomic and <br />
                small-scale behaviour...
              </p>
            </div>

            {/* Card 2 */}

            <div className=" w-[328px] h-[292px]  bg-white py-[35px] px-[40px] gap-[20px] ml-[30px]">
              <div className="w-14 h-16 bg-[#B9EAA8] rounded-[10px] py-[22px] px-[19px] gap-[10px]"></div>

              <h5 className="w-[168px] h-[24px] text-base font-bold leading-[24px] tracking-[0.1px] text-[#252B42] font-montserrat mt-5">
                2,769 online courses
              </h5>

              <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>

              <p className="w-[222px] h-[60px] text-sm font-normal leading-[20px] tracking-[0.2px] text-[#737373] mt-5 font-montserrat">
                The gradual accumulation of information about atomic and <br />
                small-scale behaviour...
              </p>
            </div>

            {/* Card 3 */}

            <div className=" w-[328px] h-[292px]  bg-[#23A6F0] py-[35px] px-[40px] gap-[20px] ml-[30px]">
              <div className="w-14 h-16 bg-[#ffffff] rounded-[10px] py-[22px] px-[19px] gap-[10px]"></div>

              <h5 className="w-[135px] h-[24px] text-base font-bold leading-[24px] tracking-[0.1] text-[#ffffff] mt-3 font-montserrat">
                training Courses
              </h5>

              <div className="w-[50px] h-[2px] bg-[#ffffff] mt-5"></div>
              <p className="w-[222px] h-[60px] text-sm font-normal leading-[20px] tracking-[0.2px] text-white mt-7 font-montserrat">
                The gradual accumulation of information about atomic and <br />
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
