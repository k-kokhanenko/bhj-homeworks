
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.has-tooltip').forEach(function(item) {    
        const div = document.createElement('div');
        div.classList.add('tooltip');        
        item.parentNode.insertBefore(div, item.nextSibling);
        
        item.addEventListener( "click" , (event) => {
            event.preventDefault();
            
            document.querySelectorAll('.tooltip_active').forEach(function(el) {   
                el.classList.remove('tooltip_active');
            }); 
            
            let rect = item.getBoundingClientRect();          
            const tooltip = item.nextElementSibling;
            if (tooltip) {
                tooltip.textContent = item.title;
                tooltip.style.cssText = `left: ${rect.x}px; top: ${rect.y+rect.height}px;`;
                tooltip.classList.toggle('tooltip_active');     
            }
        });
    });
});



