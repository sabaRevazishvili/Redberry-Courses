import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CourseDescription from "../components/CourseDescription";
import CourseEnrolledInfo from "../components/CourseEnrolledInfo";
import arrow from "../assets/icons/arrow-down.png";
import EnrolledCourseStatus from "../components/ui/EnrolledCourseStatus";

const CourseDetails = () => {
  const { id } = useParams();

  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.redclass.redberryinternship.ge/api/courses/${id}`,
        );

        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

        const result = await response.json();

        setInfo(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);
  if (loading) return <div className="p-44 text-white">Loading...</div>;
  if (error) return <div className="p-44 text-red-500">Error: {error}</div>;
  if (!info) return null;
  return (
    <main className="px-44 bg-navigation flex flex-col items-start ">
      <div>
        <span className="text-lg text-textgrey font-medium flex flex-row mt-16 gap-1.5">
          Home <img className="-rotate-90 object-contain" src={arrow} /> Browse
          <img className="-rotate-90 object-contain" src={arrow} />
          <span className="text-primary">Development</span>
        </span>
        <h1 className="text-4xl font-semibold pb-6 pt-8">{info.title}</h1>
      </div>
      <div className="flex flex-row gap-33">
        <CourseDescription details={info} />
        {info.enrollment ? (
          <EnrolledCourseStatus enrollment={info.enrollment} />
        ) : (
          <CourseEnrolledInfo details={info} />
        )}
      </div>
    </main>
  );
};

export default CourseDetails;
