import SapiensLogo from "@assets/sapiens-logo.svg";
const Partners = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary-600 uppercase tracking-wide">Güçlü Partnerlik</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 font-heading">Sapiens Laboratuvarları ile İş Birliği</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Genetik testlerimiz, uzman Sapiens laboratuvarlarında analiz edilir ve en yüksek kalite standartlarında değerlendirilir.
          </p>
        </div>
                <div className="lg:col-span-2 flex justify-center lg:justify-center">
                  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center max-w-xs">
                    <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                      <a href="https://www.sapiens.com.tr/" target="_blank" rel="noopener noreferrer">
                        <img src={SapiensLogo} alt="Sapiens Logo" className="h-8 w-auto" />
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
      </div>
    </section>
  );
};

export default Partners;
