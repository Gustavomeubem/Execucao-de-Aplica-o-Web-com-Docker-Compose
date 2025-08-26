document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados do dashboard
    const salesToday = document.getElementById('sales-today');
    const customersToday = document.getElementById('customers-today');
    const topProduct = document.getElementById('top-product');
    
    // Dados simulados
    const simulatedData = {
        sales: (Math.random() * 10000).toFixed(2),
        customers: Math.floor(Math.random() * 100),
        products: ['Paracetamol', 'Ibuprofeno', 'Amoxicilina', 'Omeprazol', 'Losartana']
    };
    
    // Atualizar dashboard
    salesToday.textContent = `R$ ${simulatedData.sales}`;
    customersToday.textContent = simulatedData.customers;
    topProduct.textContent = simulatedData.products[Math.floor(Math.random() * simulatedData.products.length)];
    
    // Botão CTA
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        alert('Sistema de gestão iniciado! Redirecionando para o painel administrativo.');
        // Simulação de redirecionamento
        window.scrollTo({
            top: document.getElementById('medicamentos').offsetTop - 70,
            behavior: 'smooth'
        });
    });
    
    // Navegação suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Simular atualização de dados em tempo real
    setInterval(() => {
        const randomSalesIncrease = (Math.random() * 100).toFixed(2);
        const newSales = (parseFloat(simulatedData.sales) + parseFloat(randomSalesIncrease)).toFixed(2);
        const newCustomers = simulatedData.customers + Math.floor(Math.random() * 5);
        
        salesToday.textContent = `R$ ${newSales}`;
        customersToday.textContent = newCustomers;
        
        // Atualizar dados simulados
        simulatedData.sales = newSales;
        simulatedData.customers = newCustomers;
    }, 10000); // Atualiza a cada 10 segundos
});
