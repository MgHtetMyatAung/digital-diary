import example1 from "../../assets/imgs/example_1.png";
import example2 from "../../assets/imgs/example_2.png";
export default function DocsPage() {
  return (
    <section>
      <main className="container mx-auto py-10 space-y-9">
        <h1 className=" text-2xl md:text-3xl font-semibold text-gray-800">
          3R Template Documentation
        </h1>
        <div className=" space-y-3">
          <h2 className=" text-xl font-semibold text-gray-800">Introduction</h2>
          <p className=" text-gray-800">
            3R Template is a versatile template for building web applications
            that interact with APIs. It provides a flexible structure for
            integrating API services and managing authentication using Redux
            Toolkit and Redux RTK Query.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Features</h2>
          <ul className=" space-y-2 px-5">
            <li className=" list-disc">
              Dynamic API configuration: Easily define and manage API services
              through a configuration array.
            </li>
            <li className=" list-disc">
              Modular Redux setup: Separation of concerns between API-related
              logic and authentication state management.
            </li>
            <li className=" list-disc">
              Example API services: Included examples for integrating with
              different API endpoints.
            </li>
            <li className=" list-disc">
              Clear documentation: Detailed explanations and examples for easy
              integration into your project.
            </li>
          </ul>
        </div>
        <div className=" space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Getting Started
          </h2>
          <p>To use 3R Website Template, follow these steps:</p>
          <ul className=" space-y-2 px-5">
            <li className=" list-decimal">
              Clone the template repository to your local machine.
            </li>
            <li className=" list-decimal">
              Install dependencies using{" "}
              <span className=" font-semibold text-blue-600">npm install</span>,{" "}
              <span className=" font-semibold text-blue-600">yarn install</span>{" "}
              or{" "}
              <span className=" font-semibold text-blue-600">pnpm install</span>
            </li>
            <li className=" list-decimal">
              Configure your API services in the{" "}
              <span className=" font-semibold text-blue-600">apiConfigs</span>{" "}
              array in{" "}
              <span className=" font-semibold text-blue-600">
                createApis.js
              </span>
              .
            </li>
            <li className=" list-decimal">
              Customize the{" "}
              <span className=" font-semibold text-blue-600">authSlice</span> as
              needed for your authentication flow.
            </li>
            <li className=" list-decimal">
              Start building your web application using the provided template
              structure.
            </li>
          </ul>
        </div>
        <div className=" space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            API Configuration
          </h2>
          <p>
            The <span className=" font-semibold text-blue-600">apiConfigs</span>{" "}
            array in{" "}
            <span className=" font-semibold text-blue-600">createApis.js</span>{" "}
            allows you to define your API services. Each configuration object
            should include the following properties:
          </p>
          <ul className=" space-y-2 px-5">
            <li className=" list-disc">
              <span className=" font-semibold text-blue-600">name</span>: A
              unique identifier for the API service.
            </li>
            <li className=" list-disc">
              <span className=" font-semibold text-blue-600">baseUrl</span>: The
              base URL for the API.
            </li>
            <li className=" list-disc">
              <span className=" font-semibold text-blue-600">auth</span>:
              Boolean indicating if the API requires authentication.
            </li>
            <li className=" list-disc">
              <span className=" font-semibold text-blue-600">tagTypes</span>: An
              array of tag types for caching purposes.
            </li>
            <li className=" list-disc">
              <span className=" font-semibold text-blue-600">endpoints</span>: A
              function that defines the API endpoints for the service.
            </li>
          </ul>
        </div>
        <div className=" space-y-2">
          <p>Example API configuration:</p>
          <div className="">
            <img src={example1} alt="" />
          </div>
        </div>
        <div className=" space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Example Usage</h2>
          <p>{`Here's an example of how you might use the Dynamic API Binding Website Template in your project:`}</p>
          <ul className=" space-y-2 px-5">
            <li className=" list-decimal">
              Configure your API services in{" "}
              <span className=" font-semibold text-blue-600">
                createApis.js
              </span>
              .
            </li>
            <li className=" list-decimal">
              Use the{" "}
              <span className=" font-semibold text-blue-600">authSlice</span> to
              manage authentication state.
            </li>
            <li className=" list-decimal">
              Dispatch actions to fetch data from your API services using the
              autogenerated hooks from{" "}
              <span className=" font-semibold text-blue-600">apiHooks</span>.
            </li>
          </ul>
          <img src={example2} alt="" />
        </div>
        <div className="">
          <p>
            Feel free to customize this documentation template to fit the
            specific features and requirements of your Dynamic API Binding
            Website Template.
          </p>
        </div>
      </main>
    </section>
  );
}
