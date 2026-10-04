"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [formData, setFormData] = useState(() => {
    let initialService = "";
    if (serviceParam) {
      const matched = servicesData.find(
        (s) =>
          s.title.toLowerCase().includes(serviceParam.toLowerCase()) ||
          s.slug.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (matched) {
        initialService = matched.title;
      }
    }
    return {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: initialService,
      preferredMethod: "Email",
      message: "",
      _honeypot: "",
    };
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please provide your full legal or business name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid corporate or professional email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errors.phone = "Please provide a valid telephone contact number.";
    }

    if (!formData.service) {
      errors.service = "Please select the primary practice area required.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message =
        "Please provide brief context regarding your requirement (min 10 characters).";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitSuccess(data.message);
      setReferenceId(data.referenceId);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        preferredMethod: "Email",
        message: "",
        _honeypot: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred during submission.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FCFBF8] border border-[#E9E7E2] p-8 sm:p-12 shadow-sm">
      {submitSuccess ? (
        <div className="py-12 space-y-6 text-center">
          <div className="w-14 h-14 bg-[#6E2635]/10 text-[#6E2635] flex items-center justify-center mx-auto rounded-none">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif-display text-3xl text-[#111111]">
            Enquiry Received
          </h3>
          <p className="text-base text-[#6B6862] font-light max-w-md mx-auto leading-relaxed">
            {submitSuccess}
          </p>
          {referenceId && (
            <div className="p-3 bg-[#F7F6F2] border border-[#E9E7E2] max-w-xs mx-auto text-xs font-mono text-[#111111]">
              Reference: {referenceId}
            </div>
          )}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitSuccess(null);
                setReferenceId(null);
              }}
              className="text-xs uppercase tracking-wider font-semibold text-[#6E2635] hover:underline"
            >
              Submit another query
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111] mb-2">
              Initiate a Confidential Enquiry
            </h3>
            <p className="text-sm text-[#6B6862] font-light">
              Please share the context of your inquiry. All communications are strictly confidential and reviewed by CA Pratik Vinchhi.
            </p>
          </div>

          {submitError && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Hidden Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_honeypot">Leave this blank</label>
            <input
              id="_honeypot"
              type="text"
              name="_honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData._honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Full Name <span className="text-[#6E2635]">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Mehta"
                className={`w-full bg-[#FCFBF8] border ${
                  formErrors.name ? "border-red-500" : "border-[#D9D6CF]"
                } focus:border-[#111111] text-sm py-3 px-4 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors`}
              />
              {formErrors.name && (
                <p className="text-[11px] text-red-600 font-sans mt-1">
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Business Email <span className="text-[#6E2635]">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rajesh@enterprise.com"
                className={`w-full bg-[#FCFBF8] border ${
                  formErrors.email ? "border-red-500" : "border-[#D9D6CF]"
                } focus:border-[#111111] text-sm py-3 px-4 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors`}
              />
              {formErrors.email && (
                <p className="text-[11px] text-red-600 font-sans mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Contact Phone <span className="text-[#6E2635]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98000 00000"
                className={`w-full bg-[#FCFBF8] border ${
                  formErrors.phone ? "border-red-500" : "border-[#D9D6CF]"
                } focus:border-[#111111] text-sm py-3 px-4 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors`}
              />
              {formErrors.phone && (
                <p className="text-[11px] text-red-600 font-sans mt-1">
                  {formErrors.phone}
                </p>
              )}
            </div>

            {/* Company / Organisation */}
            <div className="space-y-1.5">
              <label
                htmlFor="company"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Company / Organisation <span className="text-[#8A8883] text-[10px]">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Industrial LLP"
                className="w-full bg-[#FCFBF8] border border-[#D9D6CF] focus:border-[#111111] text-sm py-3 px-4 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Required */}
            <div className="space-y-1.5">
              <label
                htmlFor="service"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Practice Area <span className="text-[#6E2635]">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`w-full bg-[#FCFBF8] border ${
                  formErrors.service ? "border-red-500" : "border-[#D9D6CF]"
                } focus:border-[#111111] text-sm py-3 px-4 text-[#111111] focus:outline-none transition-colors`}
              >
                <option value="">Select relevant practice area</option>
                <option value="Accounting & Compliance">
                  Accounting &amp; Compliance (MIS, Ledgers, Finalisation)
                </option>
                <option value="Taxation Advisory & Compliance">
                  Taxation Advisory (Direct Tax, GST, Assessment Support)
                </option>
                <option value="Strategic Business Advisory">
                  Strategic Advisory (Corporate Restructuring, Capital)
                </option>
                <option value="Corporate & Professional Services">
                  Corporate Services (MCA, Statutory Registers)
                </option>
                <option value="General Professional Advisory">
                  Other / General Advisory Consultation
                </option>
              </select>
              {formErrors.service && (
                <p className="text-[11px] text-red-600 font-sans mt-1">
                  {formErrors.service}
                </p>
              )}
            </div>

            {/* Preferred Contact Method */}
            <div className="space-y-1.5">
              <label
                htmlFor="preferredMethod"
                className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
              >
                Preferred Communication Channel
              </label>
              <select
                id="preferredMethod"
                name="preferredMethod"
                value={formData.preferredMethod}
                onChange={handleChange}
                className="w-full bg-[#FCFBF8] border border-[#D9D6CF] focus:border-[#111111] text-sm py-3 px-4 text-[#111111] focus:outline-none transition-colors"
              >
                <option value="Email">Email response</option>
                <option value="Phone">Telephone briefing</option>
                <option value="Video Conference">Virtual meeting schedule</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider font-medium text-[#111111]"
            >
              Summary of Enquiry <span className="text-[#6E2635]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding your firm, timeline, or specific regulatory questions..."
              className={`w-full bg-[#FCFBF8] border ${
                formErrors.message ? "border-red-500" : "border-[#D9D6CF]"
              } focus:border-[#111111] text-sm p-4 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors resize-none`}
            />
            {formErrors.message && (
              <p className="text-[11px] text-red-600 font-sans mt-1">
                {formErrors.message}
              </p>
            )}
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] hover:bg-[#222222] text-[#FCFBF8] text-sm font-medium tracking-wide uppercase font-sans border border-[#111111] disabled:opacity-50 transition-all duration-200 cursor-pointer group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Confidential Enquiry</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
            <p className="text-[11px] text-[#8A8883] font-sans mt-3">
              We respect your privacy. No marketing solicitation. Fiduciary confidentiality observed.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
