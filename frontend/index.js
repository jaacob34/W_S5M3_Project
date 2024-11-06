function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav')

    links.forEach(link => {
      const { href, textContent, title } = link
      const newLink = document.createElement('a')
      newLink.title = title
      newLink.href = href
      newLink.textContent = textContent
      nav.appendChild(newLink)
    })

    return nav

  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here

      const card = document.createElement('div')
      card.classList.add('learner-card')

      const name = document.createElement('p')
      const learnerId = document.createElement('p')
      const dob = document.createElement('p')
      const favLang = document.createElement('p')

      name.textContent = learner.fullName
      learnerId.textContent = `Learner ID: ${learner.id}`
      dob.textContent = `Date of Birth: ${learner.dateOfBirth}`

      const favoriteLanguage = languages.find(lang => lang.id === learner.favLanguage)
      favLang.textContent = `Favorite Language: ${favoriteLanguage.name}`

      card.append(name, learnerId, dob, favLang)

      card.addEventListener('click', () => {
        const cards = Array.from(document.querySelector('section').children)
        const active = cards.find(card => card.classList.contains('active'));
        
        if (active) {
          active.classList.remove('active')
        }

        card.classList.add('active')
      
        
      })
      
      return card
    }


  {


    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    function addLearnerCards(learners, languages) {
      const section = document.querySelector('section');
      learners.forEach(learner => {
          const card = buildLearnerCard(learner, languages);
          section.appendChild(card);
      })
    
  }
  addLearnerCards(learners, languages);
}

  

  
    
  


  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const currentYear = new Date().getFullYear().toString()
    const footer = document.createElement('footer')

    const companyInfo = document.createElement('div')
    companyInfo.classList.add('company-info')

      const companyName = document.createElement('p')
      companyName.classList.add('company-name')
      companyName.textContent = footerData.companyName

      const address = document.createElement('p')
      address.classList.add('address')
      address.textContent = footerData.address

      const contactEmail = document.createElement('p')
      contactEmail.classList.add('contact-email')
      contactEmail.textContent = 'Email: '
        const emailHref = document.createElement('a')
        emailHref.href = `mailto:${footerData.contactEmail}`
        emailHref.textContent = footerData.contactEmail

    const socialMedia = document.createElement('div')
    socialMedia.classList.add('social-media')

      const twitter = document.createElement('a')
      twitter.href = footerData.socialMedia.twitter
      twitter.textContent = 'Twitter'

      const facebook = document.createElement('a')
      facebook.href = footerData.socialMedia.facebook
      facebook.textContent = 'Facebook'

      const instagram = document.createElement('a')
      instagram.href = footerData.socialMedia.instagram
      instagram.textContent = 'Instagram'

    const watermark = document.createElement('div')
    watermark.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`

    contactEmail.appendChild(emailHref)
    socialMedia.append(twitter, facebook, instagram)
    companyInfo.append(companyName, address, contactEmail)
    footer.append(companyInfo, socialMedia, watermark)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
