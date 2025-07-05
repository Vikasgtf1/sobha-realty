import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  // const getProjectName = () => {
  //   const currentPath = location.pathname;

  //   if (currentPath.includes("/branding")) {
  //     return "Sobha Reality - Branding";
  //   } else if (currentPath.includes("/remarketing")) {
  //     return "Sobha Reality - Remarketing";
  //   } else if (currentPath.includes("/demand-gen")) {
  //     return "Sobha Reality - Demand-gen";
  //   } else {
  //     return "Sobha Reality";
  //   }
  // };

  const getProjectName = () => {
  return "One FNG TECHZONE 4 Greater Noida West";
};

  const handleSubmit = async (formDetails) => {
    console.log("formsubmitted");
    const projectName = getProjectName();
    setLoading(true);
    setResponse(null);
    setError(null);

    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4559&qSenderName=${encodeURIComponent(
      formDetails.name
    )}&qMobileNo=${encodeURIComponent(
      formDetails.contact
    )}&qEmailID=${encodeURIComponent(
      formDetails.email
    )}&qQueryMessage=${encodeURIComponent(
      formDetails.message
    )}&qProjectName=${encodeURIComponent(projectName)}`;

    try {
      const res = await fetch(apiUrl, { method: "GET" });
      if (!res.ok) throw new Error("Failed to submit form");
      setResponse({ success: true, message: "Form submitted successfully!" });

      window.location.href = "/one-fng/thank-you";
      // navigate("/thank-you.htm");
    } catch (err) {
      const message = err.message || "Something went wrong";
      setError(message);
      setResponse({ success: false, message });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
    error,
    response,
  };
};
