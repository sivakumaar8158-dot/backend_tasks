document.addEventListener('DOMContentLoaded', () => {
    // Initialize Animate On Scroll Library
    AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        offset: 100
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate Hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active')
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active')
                ? '0'
                : '1';
            spans[2].style.transform = navLinks.classList.contains('active')
                ? 'rotate(-45deg) translate(7px, -6px)'
                : 'none';
        });
    }

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Scroll Effect (Optimized with RequestAnimationFrame)
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(10, 10, 18, 0.95)';
                    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 18, 0.8)';
                    navbar.style.boxShadow = 'none';
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');

            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
        // Modal Logic
        const modal = document.getElementById('info-modal');
        const closeBtn = document.querySelector('.close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        // Beginner-Friendly Content Dictionary
        const topicContent = {
            'variables': {
                title: 'Variables',
                text: "Think of a variable as a labeled box 📦 where you store information. <br><br>• <strong>let:</strong> A box where you can change the contents later.<br>• <strong>const:</strong> A box you seal shut; you can't change it once set.<br>• <strong>var:</strong> The old style box (try to avoid using this now!).",
                code: `let score = 10;
score = 20; // Changed!

const pi = 3.14; 
// pi = 5; // Error! Can't change const.`
            },
            'datatypes': {
                title: 'Data Types',
                text: "In JavaScript, data comes in different 'flavors':<br><br>• <strong>String:</strong> Text (wrapped in quotes).<br>• <strong>Number:</strong> Integers or decimals.<br>• <strong>Boolean:</strong> True or False (Toggle switches).<br>• <strong>Object:</strong> Complex data with properties.",
                code: `let name = "Siva"; // String
let age = 21;    // Number
let isDev = true;// Boolean`
            },
            'arrays': {
                title: 'Arrays',
                text: "An Array is like a shopping list 📝. It's a single container that holds multiple items in a specific order.",
                code: `let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // "Red"`
            },
            'loops': {
                title: 'Loops',
                text: "Loops let you repeat an action multiple times without writing the same code over and over. It's like telling a robot: 'Do this 5 times'. 🤖",
                code: `// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`
            },
            'objects': {
                title: 'Objects',
                text: "Objects recreate real-life things in code. They have 'properties' (features) and 'methods' (actions).",
                code: `const car = {
  brand: "Tesla",
  color: "Red",
  start: function() {
    console.log("Vroom!");
  }
};`
            },
            'functions': {
                title: 'Functions',
                text: "A Function is a reusable block of code. Think of it like a recipe 🍳. You define the steps once, and then you can 'cook' (call) it whenever you want.",
                code: `function sayHello(name) {
  return "Hello " + name + "!";
}

alert(sayHello("Siva"));`
            },
            'operators': {
                title: 'Operators',
                text: "Operators imply logic! <br><br>• <strong>+ - * /</strong>: Math stuff.<br>• <strong>&& (AND)</strong>: Both must be true.<br>• <strong>|| (OR)</strong>: At least one must be true.<br>• <strong>! (NOT)</strong>: Opposite day! (true becomes false).",
                code: `let canDrive = (age >= 18) && (hasLicense);`
            },
            'filter': {
                title: 'Filter Method',
                text: "Imagine a sieve or strainer. `.filter()` creates a NEW array containing only items that pass a specific test. 🕵️‍♂️",
                code: `const scores = [10, 50, 90, 30];
const pass = scores.filter(n => n > 40);

console.log(pass); // [50, 90]`
            },
            'callbacks': {
                title: 'Callback Functions',
                text: "A callback is a function passed to another function. It's like saying: 'Here's my phone number, call me back when you're done!' 📞",
                code: `function doHomework(subject, callback) {
  alert("Finished " + subject);
  callback();
}

doHomework("Math", function() {
  alert("Time to play!");
});`
            },
            'hof': {
                title: 'Higher-Order Functions',
                text: "These are the 'Boss' functions. They either take other functions as workers (arguments) or return new functions. `.map()` and `.filter()` are famous HOFs. 👔",
                code: `// .map() takes a function as an argument
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);`
            },
            'async': {
                title: 'Async / Await',
                text: "JavaScript usually does one thing at a time. `Async/Await` lets it pause ⏸️ for tasks that take time (like fetching data) without freezing the whole page.",
                code: `async function getUser() {
  const data = await fetch('api/user');
  console.log(data);
}`
            },
            'promises': {
                title: 'Promises',
                text: "A Promise is like a receipt for a pizza orders 🍕. You don't have the pizza yet, but you have a 'promise' that it will arrive (resolve) or fail (reject).",
                code: `const pizzaOrder = new Promise((resolve, reject) => {
  let inStock = true;
  if(inStock) resolve("Pizza is here!");
  else reject("No dough left!");
});`
            }
        };

        // Open Modal
        document.querySelectorAll('.interactive-card').forEach(card => {
            card.addEventListener('click', () => {
                const topic = card.getAttribute('data-topic');
                const data = topicContent[topic];

                if (data) {
                    modalTitle.innerHTML = data.title;
                    modalBody.innerHTML = `
                    <div class="modal-text">${data.text}</div>
                    ${data.code ? `<div class="modal-code"><pre>${data.code}</pre></div>` : ''}
                `;
                    modal.classList.add('active');
                }
            });
        });

        // Close Modal
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});
