<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Company;

class CompanyController extends Controller
{
    public function create()
    {
        // create a new company record
        $company = Company::create([
            'name' => 'Acme Inc.',
            'email' => 'info@acme.com',
            'phone' => '555-1234',
            'address' => '123 Main St., Anytown USA'
        ]);

        return "Company created successfully!";
    }

    public function read()
    {
        // retrieve a company record
        $company = Company::find(1);

        return $company;
    }

    public function update()
    {
        // update a company record
        $company = Company::find(1);
        $company->email = 'newinfo@acme.com';
        $company->save();

        return "Company updated successfully!";
    }

    public function delete()
    {
        // delete a company record
        $company = Company::find(1);
        $company->delete();

        return "Company deleted successfully!";
    }
}
