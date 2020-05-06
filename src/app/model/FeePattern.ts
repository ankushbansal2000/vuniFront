export class FeePattern {
    fee_pattern_class_name: string;
    fee_pattern_type:string;
    fee_pattern_batch:string;
}


export class FeePatternHead {
    fee_pattern_name: string;
    fee_collect_pattern:string;
    total_academic_fee:string;
    total_tution_fee:string;
    total_hostel_fee:string;
}

export class Batch {
    batch:string;
    academic_year:string;
    start_date:string;
    end_date:string;
    intake:string;
}