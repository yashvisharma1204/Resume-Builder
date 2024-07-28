 document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const fullname = document.getElementById('fullname').value;
    const designation = document.getElementById('designation').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const location = document.getElementById('location').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;

    // Update the resume template with form values
    document.getElementById('fullname_dsp').innerText = fullname || 'Ryan Peterson';
    document.getElementById('designation_dsp').innerText = designation || 'Business Analyst';
    document.getElementById('phone_dsp').innerText = phone || '+1 202-555-0161';
    document.getElementById('email_dsp').innerText = email || 'sample@websder.com';
    document.getElementById('website_dsp').innerText = website || 'www.websder.com';
    document.getElementById('location_dsp').innerText = location || 'New York, NY';

    // Update skills
    const skillsList = skills ? skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('') : '<li>Analytical Skills</li><li>Communication</li><li>Teamwork</li>';
    document.getElementById('skills_dsp').innerHTML = `<h2>Skills</h2><ul>${skillsList}</ul>`;

    // Update languages
    const languagesList = languages ? languages.split(',').map(language => `<li>${language.trim()}</li>`).join('') : '<li>English</li><li>Spanish</li><li>French</li>';
    document.getElementById('languages_dsp').innerHTML = `<h2>Languages</h2><ul>${languagesList}</ul>`;

    // Update experience
    const experiences = document.querySelectorAll('#experience-section .experience');
    let experienceHTML = '<h2>Experience</h2>';
    experiences.forEach(exp => {
        const jobTitle = exp.querySelector('.job-title').value || 'Marketing Business Analyst';
        const company = exp.querySelector('.company').value || 'Project Solutions';
        const startDate = exp.querySelector('.start-date').value || '01/2015';
        const endDate = exp.querySelector('.end-date').value || 'Present';
        const description = exp.querySelector('.description').value || 'Successfully coordinated...';
        experienceHTML += `<div class="job">
                            <h3>${jobTitle}, ${company} <span>${startDate} - ${endDate}</span></h3>
                            <p>${description}</p>
                           </div>`;
    });
    document.getElementById('experience_dsp').innerHTML = experienceHTML;

    // Update education
    const educations = document.querySelectorAll('#education-section .education');
    let educationHTML = '<h2>Education</h2>';
    educations.forEach(edu => {
        const school = edu.querySelector('.school').value || 'New York University';
        const degree = edu.querySelector('.degree').value || 'Bachelor of Science';
        const graduationDate = edu.querySelector('.graduation-date').value || '2012';
        educationHTML += `<div class="education-entry">
                            <h3>${school} - ${degree} <span>${graduationDate}</span></h3>
                          </div>`;
    });
    document.getElementById('education_dsp').innerHTML = educationHTML;

    // Update certificates
    const certificates = document.querySelectorAll('#certificate-section .certificate');
    let certificatesHTML = '<h2>Certificates</h2>';
    certificates.forEach(cert => {
        const certName = cert.querySelector('.certificate').value || 'Google AdWords Search Advanced';
        const issueDate = cert.querySelector('.issue-date').value || '2011 - Present';
        certificatesHTML += `<div class="certificate-entry">
                                <h3>${certName} <span>${issueDate}</span></h3>
                             </div>`;
    });
    document.getElementById('certificates_dsp').innerHTML = certificatesHTML;
});

// Function to add more experience sections
document.getElementById('add-experience').addEventListener('click', function() {
    const experienceSection = document.getElementById('experience-section');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience');
    newExperience.innerHTML = `
        <label for="job-title">Job Title:</label>
        <input type="text" class="job-title" name="job-title" required>

        <label for="company">Company Name:</label>
        <input type="text" class="company" name="company" required>

        <label for="start-date">Start Date:</label>
        <input type="date" class="start-date" name="start-date" required>

        <label for="end-date">End Date:</label>
        <input type="date" class="end-date" name="end-date" required>

        <label for="description">Description:</label>
        <textarea class="description" name="description" required></textarea>
    `;
    experienceSection.appendChild(newExperience);
});

// Function to add more education sections
document.getElementById('add-education').addEventListener('click', function() {
    const educationSection = document.getElementById('education-section');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education');
    newEducation.innerHTML = `
        <label for="school">School Name:</label>
        <input type="text" class="school" name="school" required>

        <label for="degree">Degree:</label>
        <input type="text" class="degree" name="degree" required>

        <label for="graduation-date">Graduation Date:</label>
        <input type="date" class="graduation-date" name="graduation-date" required>
    `;
    educationSection.appendChild(newEducation);
});

// Function to add more certificate sections
document.getElementById('add-certificate').addEventListener('click', function() {
    const certificateSection = document.getElementById('certificate-section');
    const newCertificate = document.createElement('div');
    newCertificate.classList.add('certificate');
    newCertificate.innerHTML = `
        <label for="certificate">Certificate Name:</label>
        <input type="text" class="certificate" name="certificate" required>

        <label for="issue-date">Issue Date:</label>
        <input type="date" class="issue-date" name="issue-date" required>
    `;
    certificateSection.appendChild(newCertificate);
});

function printCV() {
    window.print();
}
