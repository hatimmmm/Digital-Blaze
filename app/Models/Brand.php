<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public $table = 'brand';

    use HasFactory;
    protected $fillable = [
        'name','logo'
    ];
}
