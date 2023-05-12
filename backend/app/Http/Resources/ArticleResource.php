<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'company' => $this->company,
            'position' => $this->position,
            'email' => $this->email,
            'address' => $this->address,
            'office' => $this->office,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
