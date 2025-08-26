document.getElementById("contactForm").addEventListener("submit", async function (self) {
    self.preventDefault();
    
    const form = self.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try{
        const response = await fetch("/contact", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(data)
        });

        const result = await response.text();
        alert(result);
        window.location.reload();
        form.reset();

    }catch(error){
        alert("Something went wrong. Please try again.");
        console.error(error);
    }
})