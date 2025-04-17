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
        <div className="mt-10 flex justify-center">
          <div className="p-5 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 font-heading">SAPIENS<span className="text-secondary-600">Lab</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
