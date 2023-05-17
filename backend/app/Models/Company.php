<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    // create a new company record
    public function create()
    {
        $company = new Company;
        $company->name = 'Acme Inc.';
        $company->email = 'info@acme.com';
        $company->phone = '555-1234';
        $company->address = '123 Main St., Anytown USA';
        $company->save();
    }


}
