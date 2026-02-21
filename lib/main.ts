import api from "./api";
interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface QuotationProps {
  name: string;
  email: string;
  phone: string;
  volume: string;
  field: string;
  sample_file: string;
  source_lang: string;
  target_lang: string;
  message: string;
}

export const getMainData = async () => {
  const res = await api.get("/landingpage//");
  return res.data;
};

export const sendMessage = async (data: ContactFormProps) => {
  const res = await api.post("/contact-us/", data);
  return res.data;
};

export const sendQuotation = async (data: QuotationProps) => {
  const res = await api.post("/quotation/", data);
  return res.data;
};

