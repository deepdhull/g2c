import React from 'react';

function Service1() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-12" style={{ backgroundImage: "url('photos/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg')" }}>
            <div className="bg-white bg-opacity-75 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 rounded-md p-12 max-w-4xl w-full mx-4 shadow-md">
                <h2 className="text-4xl font-semibold mb-6">Bridging Gap Between Growers and Consumers</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    G2C offers a revolutionary platform that connects local growers and producers directly with consumers in their locality. 
                    By eliminating the need for middlemen, our platform ensures that consumers have easy access to fresh, locally-produced commodities 
                    such as fruits, vegetables, and dairy products. Growers can effortlessly list their products and manage their availability, 
                    providing a transparent and efficient marketplace. This direct connection not only saves time and effort for consumers but 
                    also ensures they receive high-quality products straight from the source.
                </p>
            </div>
        </div>
    );
}

export default Service1;
