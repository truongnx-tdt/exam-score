import { Component } from '@angular/core';

// Interfaces
interface Province {
  ma_tinh: string;
  ten_tinh: string;
}


interface ExamResult {
  STT: string;
  file_name: string;
  modified_date: string;
  Id: string;
  TinhId: number;
  DM1: number;
  DM2: number;
  DM3: number;
  DM4: number;
  DM5: number;
  DM6: number;
  DM7: number;
  DM8: number;
  DM9: number;
  DM10: number;
  DM11: number;
  DM12: number;
  DM13: number;
  MA_MON_NGOAI_NGU: string;
  SBD: string;
  TONGDIEM: number;
  TOAN: number;
  VAN: number;
  NGOAI_NGU: number;
  SU: number;
  DIA: number;
  GDKT_PL: number;
  LI: number;
  HOA: number;
  SINH: number;
  TIN_HOC: number;
  GIAO_DUC_CONG_DAN: number;
  CN_CONG_NGHIEP: number;
  CN_NONG_NGHIEP: number;
  NGAY_SINH: string;
  ten_tinh?: string;
}

interface SubjectInfo {
  key: keyof ExamResult;
  name: string;
  color: string;
}

interface ScoreRange {
  range: string;
  count: number;
  percentage: string;
}

interface ProvinceStats {
  ma_tinh: string;
  ten_tinh: string;
  avgScore: number;
  totalStudents: number;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  provinces: Province[] = [];

}
