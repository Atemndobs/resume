import React, { FC, useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import { About as AboutInterface } from "../../data/dataDef";
import classNames from "classnames";
import Image from "next/image";
import { SectionId } from "../../data/data";
import Section from "../Layout/Section";
import { AboutQuery } from "../../../tina/__generated__/types";

const About: FC = () => {
    const [aboutData, setAboutData] = useState<AboutInterface | undefined>(undefined);

    // Set up the initial Tina props outside of useEffect
    const tinaProps = {
        query: `{
      about(relativePath: "about.md") {
        title
        profileImageSrc
        description
        aboutItems {
          label
          text
          icon
        }
      }
    }`,
        variables: {},
        data: {}
    };
    // Fetch your data and then signal that data is loaded
    useEffect(() => {
        async function fetchAboutData() {
            try {
                const response = await client.queries.about({
                    relativePath: "about.md",
                });
                const fetchedData = response.data; // Assuming this gives you the correct structure
                const aboutDataTransformed: AboutInterface = {
                    title: fetchedData.about.title!,
                    profileImageSrc: fetchedData.about.profileImageSrc!,
                    description: fetchedData.about.description!,
                    aboutItems: fetchedData.about.aboutItems?.map((item: any) => ({
                        label: item.label,
                        text: item.text,
                        Icon: item.Icon,
                    })) || [],
                };
              //  tinaProps.data = fetchedData; // Set the fetched data to the Tina props
                setAboutData(aboutDataTransformed);
                tinaProps.data = aboutDataTransformed;
            } catch (error) {
                console.error("Failed to fetch about data:", error);
            }
        }
        fetchAboutData();
    }, []);

    // Use Tina unconditionally
    const { data } = useTina(tinaProps);

    console.log("data", data)
    if (!aboutData) return <p>Loading...</p>;

    return (
        <Section className="bg-neutral-800" sectionId={SectionId.About}>

            <div
                className={classNames("grid grid-cols-1 gap-y-4", {
                    "md:grid-cols-4": !!aboutData.profileImageSrc,
                })}
            >
                {!!aboutData.profileImageSrc && (
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                            <Image
                                src={aboutData.profileImageSrc}
                                alt="Profile"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                )}
                <div
                    className={classNames("col-span-1 flex flex-col gap-y-6", {
                        "md:col-span-3": !!aboutData.profileImageSrc,
                    })}
                >
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold text-white">Bertrand Ndobegang Atemkeng</h2>
                        <p className="prose prose-sm text-gray-300 sm:prose-base">
                            {aboutData.description}
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {aboutData.aboutItems.map(({ label, text, Icon }, idx) => (
                            <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                                {Icon && <Icon className="h-5 w-5 text-white" />}
                                <span className="text-sm font-bold text-white">{label}:</span>
                                <span className=" text-sm text-gray-300">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
