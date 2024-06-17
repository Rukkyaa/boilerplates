export const brevoServiceCode = `import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axiosInstance from '{pathToAxiosInstance}';

export const TEMPLATE_IDS = {
  FORGOT_PASSWORD: 1, // Replace with the template IDs of your choice
} as const;

interface ISendMailProps {
  to: string;
  templateId: (typeof TEMPLATE_IDS)[keyof typeof TEMPLATE_IDS];
  params: Record<string, string>;
}

@Injectable()
export class BrevoService {
  private readonly brevoApiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.brevoApiKey = this.configService.get('BREVO_API_KEY')!;
  }

  async sendMail({ to, templateId, params }: ISendMailProps) { 
    axiosInstance.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        to: [{ email: to }],
        templateId,
        params,
      },
      {
        headers: {
          'api-key': this.brevoApiKey,
          'Content-Type': 'application/json',
        },
      }
    );
  };
}
`;
