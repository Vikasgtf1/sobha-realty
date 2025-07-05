import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const getProjectName = () => {
    const currentPath = location.pathname;

    if (currentPath.includes("/branding")) {
      return "Grandthum - Branding";
    } else if (currentPath.includes("/remarketing")) {
      return "Grandthum - Remarketing";
    } else if (currentPath.includes("/demand-gen")) {
      return "Grandthum - Demand-gen";
    } else {
      return "Grandthum";
    }
  };

  const handleSubmit = async (formDetails) => {
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

      window.location.href = "/grandthum/thankyou";
      // alert("thank you, we will contact you soon");
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
