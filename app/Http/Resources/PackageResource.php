<?php

namespace App\Http\Resources;

use App\Services\StripeService;
use App\Package;
use Cartalyst\Stripe\Api\PaymentMethods;
use Faker\Factory;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data'          => [
                    'id'   => (string)$this->id,
                    'name'     => $this->name,
                    'cost'     => $this->cost,
                    'size'     => $this->size,
                    'duration' => $this->duration,
                    'detail'   => $this->detail,
                    'created_at'=> $this->created_at,
                    'updated_at' => $this->updated_at,
            ]
        ];
    }
}
