import React from 'react'

function pixelImage (fixed) {
  let imgClasses = `project_img pixel_imgs`
  if (!fixed) imgClasses += ` project_img_absolute`

  return (
    <div className={imgClasses}>
      <img className="img_pixel_wall" width="525px" src="/img/landing/pixel/pixelwall.png"/>
    </div>
  )
}

function pixelArticle () {
  return (
    <div className="pixel_article">

      <div className="proj_links">
        <a href="https://owlsketch.com/pixel">Visit Pixel Wall</a>
        <a href="https://github.com/RutgersGRID/pixelwall">View Code</a>
      </div>
    
      <h2 className="article_title">Interactive ‘Internet Of Things’ LEDs</h2>
      <article className="article_content">
        <p>
          The Pixel Wall project consists of an interactive LED grid device along with software to control the device through the web. It was designed for GRID so that visitors may feel welcome to a space that both promotes participation with technology, and provides resources for others to learn and create.
        </p>

        <p>
          The device consists of a grid of LEDs, a microcontroller, and a host computer. The grid of LEDs are controlled by the microcontroller that in turn receives commands from the computer it is connected to. In order to allow the computer to communicate with the microcontroller that controls the LEDs while it is running, we loaded the Firmata protocol onto the microcontroller. With this in place, a basic set of commands were defined that would allow the microcontroller to control the LEDs when these commands are sent by the host computer. 
        </p>

        <p className="article_quote">
          The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <p>
          In order to allow the device to be controlled through the internet, I made use of the socket.io library. The device, once set up and running, automatically connects to a predetermined socket. I then created a site which gives any visitor access to the same socket. By having vistors access the site, they can send commands through the site's interface, which are then received by the host computer of the device and sent as commands to the microcontroller.
        </p>

        <p>
          The interface of the site was designed with a mobile-first approach. The experience we wanted visitors to have was one where they can instantly control an element in their environment from their phones.
        </p>

        <p>
          By the end of my contract with GRID we managed to create a handful of prototypes, one of which was featured by Mozilla's Internet Of Things team at MakerFaire in California. Before leaving, we also managed to constuct a pixel wall with a total of 2,700 LEDs, with help from a Make article I found online.
        </p>

        <p>
          After having graduated from Rutgers, this was my first 'real' project. It was my first opportunity to prove that I really had the skills to create with what I had been learning over the years. Nevertheless, I couldn’t have managed to pursue this project without the help from my friends at GRID. This project also helped show me the direction I need to be heading towards in order to live a meaningful life.
        </p>

        <p>
          I hope to one day be able to visit this project again. I accomplished many of the technical goals that were set out for me, however I believe there were many social shortcomings. A greater effort could have been made to entice people into making their own pixel walls. That initiative could have been provoked through the use of a common microcontroller during development that is more easily accessible than the one that we did utilize. Another shortcoming was the lack of a formalized set of instructions for creating a pixel wall. In particular, the assembly of the container, which I had very little knowledge on how to approach myself admittedly. 
        </p>

        <p>
          Hopefully one day I can build upon what is already in place and create a truly open source device, that also succeeds in allowing makers to create their own devices and to learn along the journey. Regardless, I'm proud of having built a device that entertained lots of people and had them interested in how I made it happen.
        </p>
        <img className="endmark" width="48px" src="/img/article/owlsketch_black.png"/>
      </article>
    </div>
  )
}

export { pixelImage, pixelArticle }
