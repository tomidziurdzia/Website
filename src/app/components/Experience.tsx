import React from "react";

const Experience = () => {
  return (
    <div className="text-white mt-10">
      <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
      <div>
        <div className="flex justify-between font-bold text-xl">
          <span>Dopelist</span>
          <span>2023 - 2024</span>
        </div>
        <p>
          Dopelist is an application that allows users to save their places of
          interest and create public and private lists. Users can share these
          lists with their friends, making it easy to organize and exchange
          information about favorite places.
        </p>
        <p className="my-2">My contributions included:</p>

        <ul className="list-disc ml-4">
          <li>
            {
              "Implemented an API to fetch and integrate metadata information, enhancing the application's functionality and user experience."
            }
          </li>
          <li>
            {
              "Implemented authentication and authorization mechanisms using Auth0."
            }
          </li>{" "}
          <li>
            {
              "Developed a WhatsApp bot using webhooks to provide users with real-time notifications and updates."
            }
          </li>{" "}
          <li>
            {
              "Contributed to the design and development of an intuitive and engaging user interface, ensuring a seamless user experience."
            }
          </li>{" "}
          <li>
            {
              "Implemented features for creating, editing, and deleting dopelists."
            }
          </li>{" "}
          <li>
            {"Implemented CI/CD process deploying to production on Vercel."}
          </li>
          <li>
            {
              "Development of REST API endpoints with comprehensive testing to ensure efficient and seamless functionality."
            }
          </li>{" "}
          <li>
            {
              "Established efficient storage and retrieval of app data by implementing access to the PostgreSQL database. Designed the database schema and set up the server-database connection to ensure optimal performance and scalability."
            }
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <div className="flex justify-between font-bold text-xl">
          <span>Logística y Transporte Jouve</span>
          <span>2021 - 2023</span>
        </div>
        <p className="my-2">My contributions included:</p>

        <ul className="list-disc ml-4">
          <li>
            {
              "Developed a custom CRM system to better manage and control the logistics and transportation tasks of the company using React, ExpressJs, MySQL."
            }
          </li>
          <li>
            {
              "Developed a real-time chat feature using NextJs and Socket.io, enabling instant messaging capabilities within the application."
            }
          </li>{" "}
          <li>
            {
              "Integrated features for task assignment, progress tracking, and client management."
            }
          </li>{" "}
          <li>
            {
              "Designed and developed the company website using modern web technologies, enhancing online presence and customer engagement."
            }
          </li>{" "}
          <li>
            {
              "Set up CI/CD pipelines using GitHub Actions to automate testing and deployment processes, ensuring smooth and reliable releases."
            }
          </li>{" "}
          <li>
            {
              "Initiated the design of the application using React Native, focusing on creating a user-friendly and engaging interface."
            }
          </li>
          <li>
            {
              "Applied UX/UI principles to ensure an intuitive and aesthetically pleasing user experience, including wireframing, prototyping, and user testing."
            }
          </li>{" "}
          <li>
            {
              "Implemented and managed the automation of key workflow processes, including inventory management and shipment tracking."
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
