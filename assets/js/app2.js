document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const fullname = document.getElementById('fullname').value;
    const designation = document.getElementById('designation').value;
    const achievement1 = document.getElementById('achievement1').value;
    const achievement2 = document.getElementById('achievement2').value;
    const achievement3 = document.getElementById('achievement3').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;

    // Update the resume template with form values
    document.getElementById('fullname_dsp').innerText = fullname;
    document.getElementById('designation_dsp').innerText = designation;
    document.getElementById('subheadline_dsp').innerText = `${achievement1} | ${achievement2} | ${achievement3}`;
    document.getElementById('contact_dsp').innerText = `${address} | ${phone} | ${email} | ${linkedin}`;

    const summaryItems = summary.split('\n').map(item => `<li>${item}</li>`).join('');
    document.getElementById('summary_dsp').innerHTML = `<ul>${summaryItems}</ul>`;

    // Clear previous experience entries
    document.getElementById('experience_dsp').innerHTML = '<h2>Professional Experience</h2>';

    const experiences = document.querySelectorAll('.experience');
    experiences.forEach(experience => {
        const company = experience.querySelector('.company').value;
        const location = experience.querySelector('.location').value;
        const jobTitle = experience.querySelector('.job-title').value;
        const startDate = experience.querySelector('.start-date').value;
        const endDate = experience.querySelector('.end-date').value;
        const description = experience.querySelector('.description').value;

        const experienceHtml = `
            <div class="job">
                <h3>${company}, ${location} • ${jobTitle} <span>${startDate} - ${endDate}</span></h3>
                <p>${description}</p>
            </div>
        `;
        document.getElementById('experience_dsp').insertAdjacentHTML('beforeend', experienceHtml);
    });
});
// print CV
function printCV(){
    window.print();
}
