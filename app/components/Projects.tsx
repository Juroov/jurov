import ProjectSelector from "./ProjectSelector";
import SectionHeading from "./SectionHeading";
import AnimatedContent from "./react-bits/AnimatedContent";

export default function Projects() {
  return (
    <section id="projects" className="work-section" aria-labelledby="work-heading">
      <div className="work-shell">
        <SectionHeading label="Selected work" title="Ideas, brought to life." id="work-heading"
          description="Useful apps. Thoughtful websites. Select a project and take a closer look." />

        <AnimatedContent>
        <ProjectSelector />
        </AnimatedContent>

        <div className="work-more">
          <div>
            <p className="work-project-type">Automation · Python</p>
            <h3>Web automation and data scraping</h3>
            <p>
              A Selenium workflow that turns property data from spreadsheets
              into WordPress staging listings.
            </p>
          </div>
          <div>
            <p className="work-project-type">Research</p>
            <h3>
              <a
                href="https://doi.org/10.5281/zenodo.19178899"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reyal or Fake? <span aria-hidden="true">↗</span>
              </a>
            </h3>
            <p>
              Research on the challenges of identifying AI-generated video
              and designing trustworthy verification systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
