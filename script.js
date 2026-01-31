// Change heading
function myFunction() {
    const a = document.getElementById("sc");
    a.textContent = "Profile";
    a.style.color = "violet";
}

// Form submit handler
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", handleSubmit);
});

function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const data = {
        name: document.getElementById("fname").value.trim(),
        email: document.getElementById("femail").value.trim(),
        message: document.getElementById("fmessage").value.trim()
    };

    localStorage.setItem("contactForm", JSON.stringify(data));
    console.log("Stored:", data);
}

function validateForm() {
    if (!fname.value.trim()) {
        alert("Name is required");
        return false;
    }
    if (!femail.value.trim()) {
        alert("Email is required");
        return false;
    }
    if (!fmessage.value.trim()) {
        alert("Message is required");
        return false;
    }
    return true;
}

// Dark mode (correct behavior)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dark")
            .addEventListener("click", toggleDarkMode);

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}


myFunction();
