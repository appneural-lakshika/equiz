import { SummaryDTO} from './../@dtos/summary.dto';
import { Controller } from '@nestjs/common';

import { SummaryService } from './summary.service';
import { ISummary } from 'src/@interface/summary.interface';

@Controller('summary')
export class SummaryController {
    constructor(private readonly summaryService: SummaryService) {}
}
