<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import CalloutComponent from './CalloutComponent.vue'

export default {
  name: 'AboutPage',
  components: {
    HeaderComponent,
    FooterComponent,
    CalloutComponent,
  },
  data() {
    return {
      calloutStatusTitle: "I'm Open to New Work Opportunities",
      calloutStatusMessage:
        'I’m seeking opportunities as a DevOps Engineer,  where I can apply my DevOps mindset and design-thinking approach to real-world projects. My goal is to optimize technology value streams by reducing process turbulence and creating intuitive, human-centered solutions—ensuring innovation flows effortlessly from concept to delivery and beyond.',
      calloutConnectTitle: "What's Disrupting Your Flow?",
      calloutConnectMessage:
        "Let's design seamless user experiences and eliminate turbulence in your value stream to create laminar flow. Reach out—I’m here to help make it flower. So...",
      // calloutInfoIcon: '../assets/icons/mail.svg#mail',
    }
  },
}
</script>

<template>
  <div class="layout">
    <HeaderComponent />
    <main class="about">
      <section>
        <h1>About Me</h1>
        <p>
          <strong
            >I'm an aspiring DevOps Engineer who fosters flow by blending DevOps principles with a
            design-driven perspective.</strong
          >
          I love exploring connections and patterns across the entire technology value
          stream—bridging design, development, and operations to create efficient workflows and
          seamless experiences. At the same time, I enjoy diving deep into specific challenges,
          uncovering insights that fuel innovation and inspire my creativity.
        </p>
        <p>
          <strong
            >My goal is to streamline digital experiences across development and user
            interactions—translating innovation into meaningful, human-centered solutions and make
            the technology value stream flower, because...</strong
          >
        </p>
        <blockquote>
          ... Flow is the secret to happiness.
          <span>&mdash; Mihaly Csikszentmihalyi</span>
        </blockquote>
      </section>
      <CalloutComponent :title="calloutStatusTitle" :message="calloutStatusMessage" />
      <!-- :iconHref="'../assets/icons/exclamation.svg#exclamation'"
        :iconColor="'#ff6347'" -->
      <section>
        <h2>How I Work</h2>
        <p>
          I care about the entire value stream—from design and development to operations and
          protection—I approach my work with <strong>collaboration, </strong>
          <strong>continuous feedback,</strong> and <strong>knowledge management.</strong> These
          principles are at the heart of my work process, ensuring teams bring ideas to life
          together while delivering solutions that are impactful, reliable, and secure.
        </p>
        <br />
        <h3 class="center">Feel</h3>
        <p class="center">
          I <em>understand the problem</em> by connecting with the people involved. Grasp their
          needs, frustrations, and goals.
        </p>
        <br />
        <h3 class="center">Think</h3>
        <p class="center">
          I dig deep to <em>uncover the root cause</em> and go beyond the symptoms. Define the
          challenge at its core and plan the next steps.
        </p>
        <br />
        <h3 class="center">Imagine</h3>
        <p class="center">
          I <em>find solutions</em> by thinking beyond limits and conceptualizing tangible designs.
          I test, refine and iterate to turn ideas into real-world solutions.
        </p>
        <br />
        <h3 class="center">Do</h3>
        <p class="center">
          I make a plan to make it happen and <em>build the solution.</em> I test, refine, and
          iterate to ensure continuous and optimized value delivery.
        </p>
        <br />
      </section>
      <section>
        <h2>My Default Settings</h2>
        <h3>Core Competencies</h3>
        <ul>
          <li>
            <b>Problem-Solving:</b> DevOps Philosophy & Principles, Human-Centered Design-Thinking
            with Double Diamond approach
          </li>
          <li>
            <b>Development Processes:</b> Agile Software Development Life Cycle (SDLC) with
            Behavior-Driven and Test-Driven Development (BDD & TDD)
          </li>
          <li><b>Programming Principles:</b> Object-Oriented Programming (OOP)</li>
          <li>
            <b>Collaboration:</b> Empathetic communication to bridge gaps between users, design,
            development, operations, and security.
          </li>
          <li>
            <b>Personal Knowledge Management:</b> Enables me to write clear, structured
            documentation to support knowledge sharing and breaking silos.
          </li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li><b>Version Control:</b> Git</li>
          <li><b>Frontend:</b> HTML, CSS, JavaScript, Vue.js</li>
          <li><b>Backend:</b> Node.js, MongoDB</li>
          <li><b>Build:</b> Webpack, npm</li>
          <li><b>Containerization:</b> Docker, Podman</li>
          <li><b>CI/CD:</b> Jenkins</li>
          <li><b>IaC:</b> Ansible, OpenTofu, Terraform</li>
          <li><b>Design & Prototyping:</b> Figma</li>
          <li><b>Project Management:</b> Jira or GitHub for Scrum</li>
          <li><b>Operating Systems:</b> Linux</li>
        </ul>
        <h3>Things I Want to Learn ASAP</h3>
        <ul>
          <li><b>Orchestration:</b> Scaling with Kubernetes.</li>
          <li>
            <b>Cloud Platforms & Services:</b> Mastering cloud infrastructures to create scalable
            system designs.
          </li>
          <li>
            <b>Monitoring & Observability:</b> Tracking performance with Prometheus, Grafana, and
            ELK Stack.
          </li>
          <li>
            <b>DevSecOps & Security</b> Embedding security with Snyk, OWASP ZAP, and best practices.
          </li>
          <li><b>AI Integration:</b> Leveraging generative AI for optimizing DevOps workflows.</li>
          <li>
            <b>And much more:</b> Exploring emerging tools, trends, and technologies to stay ahead.
          </li>
        </ul>
      </section>
      <section>
        <h2>The Right Fit for Me</h2>
        <ul>
          <li>
            <b>Remote in Europe</b>
            <p>
              My ideal workplace is fully remote, with my closest collaborators ideally based in or
              near the Central European Time zone. This allows for easy communication and better
              alignment in work schedules.
            </p>
          </li>
          <li>
            <b>Kind and Collaborative Team</b>
            <p>
              I thrive in environments that prioritize trust, collaboration, and kindness, where
              teams work together with mutual respect and a commitment to shared goals.
            </p>
          </li>
          <li>
            <b>Continuous Learning Enabled</b>
            <p>
              Continuous learning and growth are essential to me. I value workplaces where
              mentorship, resource sharing, and opportunities for skill development are encouraged,
              fostering both personal and professional evolution.
            </p>
          </li>
          <li>
            <b>Fair and Transparent Compensation</b>
            <p>
              A fair and competitive salary is essential, reflecting the value of my skills,
              contributions, and the cost of living in Europe. I appreciate organizations that
              approach compensation with transparency and equity, ensuring mutual respect and trust.
            </p>
          </li>
          <li>
            <b>Ethical and Sustainable Organization</b>
            <p>
              I am deeply committed to working only for ethical companies whose values align with
              mine. I place high value on data privacy and responsible use of technology, ensuring
              the rights and well-being of individuals are respected.
            </p>
          </li>
        </ul>
      </section>
      <CalloutComponent :title="calloutConnectTitle" :message="calloutConnectMessage" />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
main {
  p,
  ul {
    /* line-height: 2rem; */
    margin-bottom: 1em;
  }

  ul,
  li {
    list-style-type: disc;
    margin-left: 0.5rem;
    padding-left: 0rem;
  }
  ul {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }
  .center {
    text-align: center;
  }
  br {
    line-height: 1rem;
  }
}

/* .icon {
  margin-right: 8px;
  color: var(--icon-color, #6a2e2e);
}

svg {
  use {
    fill: currentColor;
  }
} */

/* section {
  width: 100%;
} */
</style>
