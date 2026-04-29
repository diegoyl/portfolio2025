import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

function Cont_Radarco() {
  const projKey = "radarco"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="The Radar Co."
            subtitle="Web app for real-time radar detection"
            description="Led frontend development and UX design"

            metaLists={[
                {"title":"SKILLS",
                    "items":["React", "TypeScript", "PostgreSQL", "API Development", "UX Design"]
                },
                {"title":"TOOLS",
                    "items":["AWS", "Docker","Figma"]
                },
            ]}
            projKey={projKey}
            h2margBot={""}
        ></ProjectHeader>

        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>Documenation in progress...</p>
            </>}
        ></ProjectSection>

        <Divider />

    </div>
  );
}

export default Cont_Radarco;
